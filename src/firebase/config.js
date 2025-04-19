import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCLAYUjsiYSq5lalRfvour7pim0kEkVSPg",
  authDomain: "project-2c82c.firebaseapp.com",
  projectId: "project-2c82c",
  storageBucket: "project-2c82c.firebasestorage.app",
  messagingSenderId: "1034654892468",
  appId: "1:1034654892468:web:e867b9d269be02291832e1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;