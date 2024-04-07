// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNjQZ1uhFsZdB2XPYL9rS0FI8tbsQBxyA",
  authDomain: "lab1-f9011.firebaseapp.com",
  projectId: "lab1-f9011",
  storageBucket: "lab1-f9011.appspot.com",
  messagingSenderId: "680604411100",
  appId: "1:680604411100:web:246adea0e09d4164b7c019",
  measurementId: "G-PQCM309DCX"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE= getFirestore(FIREBASE_APP);
export const DSATABASE = getDatabase(FIREBASE_APP)
export const STORAGE = getStorage(FIREBASE_APP);

// const analytics = getAnalytics(app);