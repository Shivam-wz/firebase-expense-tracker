// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArgCK6GJXEsXZFp-zq4NTDTm3Easz_W-A",
  authDomain: "expense-tracker-345b6.firebaseapp.com",
  projectId: "expense-tracker-345b6",
  storageBucket: "expense-tracker-345b6.appspot.com",
  messagingSenderId: "387830095379",
  appId: "1:387830095379:web:0f0c25f2e687b5246969e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);

// firebase login
// firebase init
// firebase deploy
