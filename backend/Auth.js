import { auth } from "./Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";


  
export async function register(email, password, setUser){

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
        console.log(`User ${user.email} is successfully signed up`)
        setUser(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(`Error ${errorCode}:${errorMessage}`)
        if(errorCode == "auth/email-already-in-use"){
          alert("This email is already in use");
        }
      });
};


export async function login(email,password, setUser){

    //const auth = auth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setUser(user)
    console.log(`User ${user.email} is successfully  Logged in`)
    // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`Error ${errorCode}:${errorMessage}`)
        if(errorCode == "auth/invalid-credential"){
          alert("You entered the incorrect credentials");
        }
    });
}

export async function logOut(setUser){
  signOut(auth)
  .then(() => {
    // Sign-out successful.
    setUser(null);
    console.log(`User is successfully  Logged out`)
  }).catch((error) => {
    // An error happened.
  });
}