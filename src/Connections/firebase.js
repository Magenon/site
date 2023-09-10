// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPqt46T1i2YGgZ_lUktSfAzelGHBG5ZHM",
    authDomain: "magenon-6be58.firebaseapp.com",
    projectId: "magenon-6be58",
    storageBucket: "magenon-6be58.appspot.com",
    messagingSenderId: "900195921087",
    appId: "1:900195921087:web:de2c9e0cf476120ca32a0a"
  };
  
  // Initialize Firebase
  // const fireConnection = !initializeApp.length && initializeApp(firebaseConfig);
  
  const fireConnection = initializeApp (firebaseConfig);
  
  export default fireConnection;