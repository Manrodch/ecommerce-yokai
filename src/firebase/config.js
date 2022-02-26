// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo8R5vg3Viqi8BZ5Vjde5lRWj_D470F20",
  authDomain: "yokai-collect.firebaseapp.com",
  projectId: "yokai-collect",
  storageBucket: "yokai-collect.appspot.com",
  messagingSenderId: "521763643394",
  appId: "1:521763643394:web:044986475daf15def9c71b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// exporte la base de dato en una variable
export const db = getFirestore(app);
