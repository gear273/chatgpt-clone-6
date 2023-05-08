import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu1TymItQaYa55YKrYLxTewMl9zF8SBGU",
  authDomain: "chatgpt-clone-b36a5.firebaseapp.com",
  projectId: "chatgpt-clone-b36a5",
  storageBucket: "chatgpt-clone-b36a5.appspot.com",
  messagingSenderId: "839852670074",
  appId: "1:839852670074:web:2bb458596e6f872faccfc3",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
