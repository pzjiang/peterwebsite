// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//npmimport { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDFHPCkxqvmz9yaISftAWhB7TocdZZZFQ",
  authDomain: "pzjiang.firebaseapp.com",
  projectId: "pzjiang",
  storageBucket: "pzjiang.firebasestorage.app",
  messagingSenderId: "1007281215019",
  appId: "1:1007281215019:web:f3fd1fe5bb6a4f7ece3c6e",
  measurementId: "G-GHN2EPQP40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);