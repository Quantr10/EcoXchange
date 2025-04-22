// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAwoyR6Jieyohtt6WdcTJ1sU0u9KiztOSk",
  authDomain: "eshop-7886e.firebaseapp.com",
  projectId: "eshop-7886e",
  storageBucket: "eshop-7886e.firebasestorage.app",
  messagingSenderId: "130356282167",
  appId: "1:130356282167:web:8a00b9672f9b568dad90b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app