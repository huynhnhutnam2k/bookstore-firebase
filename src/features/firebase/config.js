// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUM-gCzrfe4YiSNYN_28bKfpkun7rL3qo",
  authDomain: "bookstore-de3e4.firebaseapp.com",
  projectId: "bookstore-de3e4",
  storageBucket: "bookstore-de3e4.appspot.com",
  messagingSenderId: "897835295374",
  appId: "1:897835295374:web:8350d95af6635a991d5fdf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
