// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider , signInWithEmailAndPassword , sendPasswordResetEmail} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAaNAvTdJk6H-fZMihoyT2NGC0voQfYxkQ",
    authDomain: "video-flow-10a7c.firebaseapp.com",
    projectId: "video-flow-10a7c",
    storageBucket: "video-flow-10a7c.appspot.com",
    messagingSenderId: "155388877577",
    appId: "1:155388877577:web:ef452de171a4ed444711d8",
    measurementId: "G-BH6QZ4DV93"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export {signInWithEmailAndPassword};
export {sendPasswordResetEmail};