import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = process.env.NODE_ENV === 'production' ? {
    apiKey: "AIzaSyC_VsAKoCdk8nAFtnIzWhzp5dWrwW0KyBY",
    authDomain: "cmpsci263-project-1.firebaseapp.com",
    projectId: "cmpsci263-project-1",
    storageBucket: "cmpsci263-project-1.firebasestorage.app",
    messagingSenderId: "1047939343657",
    appId: "1:1047939343657:web:6473aec8bab47bd2c6c338",
    measurementId: "G-QEMC1GHRH2"
} : {
    apiKey: "AIzaSyC_VsAKoCdk8nAFtnIzWhzp5dWrwW0KyBY",
    authDomain: "cmpsci263-project-1.firebaseapp.com",
    projectId: "cmpsci263-project-1",
    storageBucket: "cmpsci263-project-1.firebasestorage.app",
    messagingSenderId: "1047939343657",
    appId: "1:1047939343657:web:6473aec8bab47bd2c6c338",
    measurementId: "G-QEMC1GHRH2"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const database = getFirestore(app);
export const analytics = () => getAnalytics(app);

export default app