// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9GQolAzzCKrlowbS8laAFqHUXE_3nfes",
  authDomain: "projetsemestriel-454b1.firebaseapp.com",
  projectId: "projetsemestriel-454b1",
  storageBucket: "projetsemestriel-454b1.firebasestorage.app",
  messagingSenderId: "568249634897",
  appId: "1:568249634897:web:fd1adf3ebb556d98b7a870"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); 
export { auth, db, storage };