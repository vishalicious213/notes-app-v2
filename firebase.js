import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALv3DlEpY4bmxk9KjpY6NZ4u-gvq3dZ6A",
    authDomain: "react-notes-ba146.firebaseapp.com",
    projectId: "react-notes-ba146",
    storageBucket: "react-notes-ba146.appspot.com",
    messagingSenderId: "376174424992",
    appId: "1:376174424992:web:e91ebb4da7bef46b602ac5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")