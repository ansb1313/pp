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
    apiKey: "AIzaSyBqeb71c1RdbXek6Z_-xD_MDr1GnEjTI7E",
    authDomain: "mystical-ally-308016.firebaseapp.com",
    projectId: "mystical-ally-308016",
    storageBucket: "mystical-ally-308016.appspot.com",
    messagingSenderId: "486070023390",
    appId: "1:486070023390:web:c37d012d8a52e3a3fefe4f",
    measurementId: "G-8JECX72NQZ"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const analytics = getAnalytics(firebaseApp);
export const database = getFirestore(firebaseApp);
export const authService = getAuth(firebaseApp)