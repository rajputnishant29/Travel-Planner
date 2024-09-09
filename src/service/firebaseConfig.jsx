// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZzJlvptf6FUr13WVCeTeYXqAWekVhyYM",
  authDomain: "ai-travel-planer-6f5b1.firebaseapp.com",
  projectId: "ai-travel-planer-6f5b1",
  storageBucket: "ai-travel-planer-6f5b1.appspot.com",
  messagingSenderId: "945968075617",
  appId: "1:945968075617:web:6b1addb00cf0506c596b20"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)