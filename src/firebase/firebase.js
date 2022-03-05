// Import the functions you need from the SDKs you need
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsr4iPKL7IcCaBV9vsaa_fL0_zpC0Rc7c",
    authDomain: "fresh-ocean-311118.firebaseapp.com",
    projectId: "fresh-ocean-311118",
    storageBucket: "fresh-ocean-311118.appspot.com",
    messagingSenderId: "616764296816",
    appId: "1:616764296816:web:e5ccd3cb9201c15882aeb5",
    measurementId: "G-XMJ1G9C99T"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const database = getFirestore(firebaseApp);
export const authService = getAuth()