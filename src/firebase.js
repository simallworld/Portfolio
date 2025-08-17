// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbdx5eiA4WC3GLGR7FBc6DNlqFixtWyN4",
  authDomain: "portfolio-contact-b748c.firebaseapp.com",
  projectId: "portfolio-contact-b748c",
  storageBucket: "portfolio-contact-b748c.firebasestorage.app",
  messagingSenderId: "217616985732",
  appId: "1:217616985732:web:a6743d6f75aad86cf6dcd1",
  measurementId: "G-4FCQWH5GK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);