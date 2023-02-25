// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, browserLocalPersistence } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNE00DbmlqglJR7bRCPmJTZdLzizDrJxw",
  authDomain: "htn23-challenge.firebaseapp.com",
  projectId: "htn23-challenge",
  storageBucket: "htn23-challenge.appspot.com",
  messagingSenderId: "133271126962",
  appId: "1:133271126962:web:09ac886905672fcf20daab",
  measurementId: "G-1W3GBGCFHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

auth.setPersistence(auth, browserLocalPersistence);

export default app;