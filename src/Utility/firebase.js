// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABCjvjIPxQrje2EYZqJLYbC-Lom4ZidhQ",
  authDomain: "clone-6116a.firebaseapp.com",
  projectId: "clone-6116a",
  storageBucket: "clone-6116a.appspot.com",
  messagingSenderId: "67773832465",
  appId: "1:67773832465:web:cfcdae4b7291ccfddc00b0",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = app.firestore();
