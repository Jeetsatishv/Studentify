// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB51WyM4WiLO7ysUneD_Imtz3CAFrqg68s",
  authDomain: "bustudentdashboard.firebaseapp.com",
  projectId: "bustudentdashboard",
  storageBucket: "bustudentdashboard.appspot.com",
  messagingSenderId: "563420496295",
  appId: "1:563420496295:web:cc7d98ff88c6649226f682",
  measurementId: "G-05EST2BYCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)