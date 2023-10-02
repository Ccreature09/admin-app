// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmnGITYIyo5GWttWZiw33djOoRpbJMbPM",
  authDomain: "administration-app-1e2db.firebaseapp.com",
  projectId: "administration-app-1e2db",
  storageBucket: "administration-app-1e2db.appspot.com",
  messagingSenderId: "207781556563",
  appId: "1:207781556563:web:388840111733fdc987f1a6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);