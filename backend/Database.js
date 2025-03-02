import { database, storage } from "./Firebase";
import { setDoc, doc, collection, addDoc, getDocs } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export async function addPost(user,title,img,img_name,comment) {
    //Data for the post
    const newDocData = {title: String(title), comment:String(comment), img_name:String(img_name)};
    //doc ref for the post=>User
    const docRef = doc(database,"posts", String(user.email))
    //doc ref for the subcollection of individual posts
    const postCollectionRef = collection(docRef, "IndivPosts");
    
    // upload the post data then upload the img
    addDoc(postCollectionRef, newDocData)
        .then((metaData) => {
            console.log("Document written!")
            console.log("User Email:", user.email);
            console.log("Metadata ID:", metaData.id);
            console.log("File Name:", img_name);
            const storageRef = ref(storage,String(user.email) + "/"+String(metaData.id) +"_"+ img_name);
            uploadBytes(storageRef, img)
                .then(() => {
                console.log('Uploaded a blob or file!');
                });
        })
        .catch((error) => {
            console.error("Error:", error);
        })
    
}

export async function getUserPosts(email){
    const docRef = doc(database,"posts", String(email))
    //doc ref for the subcollection of individual posts
    const postCollectionRef = collection(docRef, "IndivPosts");
    // Query a reference to a subcollection
    const querySnapshot = await getDocs(postCollectionRef);
    let docLst = [];
     for (let doc of querySnapshot.docs) {
        // doc.data() is never undefined for query doc snapshots
        //console.log(doc.id, " => ", doc.data().title);
        const imageRef = ref(storage, email+"/"+String(doc.id)+"_"+doc.data().img_name);
        try{
            let imgURL = await getDownloadURL(imageRef);
                console.log("Image URL:", imgURL);
                docLst.push([doc.id, doc.data(), imgURL]);
        }
        catch(error){
            console.error("Error getting image URL:", error);
        }
      }
    return docLst
    }

    
