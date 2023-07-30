
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK8BwvxL7G6XkECtkqK8qgRUjnX4r7woU",
  authDomain: "chatapp-1946f.firebaseapp.com",
  projectId: "chatapp-1946f",
  storageBucket: "chatapp-1946f.appspot.com",
  messagingSenderId: "887493465460",
  appId: "1:887493465460:web:47fd445a069015c11ac821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider()