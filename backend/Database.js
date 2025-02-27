import { database } from "./Firebase";
import { setDoc, doc } from "firebase/firestore"; 

export async function addPost() {
    const newDocData = {first: "alan", last: "jackson"};
    const docRef = doc(database, "posts", "postID")
    
    setDoc(docRef, newDocData)
        .then(() => {
            console.log("Document written!")
        })
        .catch((error) => {
            console.error("Error:", error);
        })
}
