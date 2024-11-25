// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, push, onValue, update, child, remove, get } from "firebase/database";
//npmimport { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDFHPCkxqvmz9yaISftAWhB7TocdZZZFQ",
  authDomain: "peterzjiang.com",
  projectId: "pzjiang",
  storageBucket: "pzjiang.firebasestorage.app",
  messagingSenderId: "1007281215019",
  appId: "1:1007281215019:web:f3fd1fe5bb6a4f7ece3c6e",
  measurementId: "G-GHN2EPQP40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const getBlogs = function getBlogs(search) {
  const blogRef = get(ref(db,  `${search}/`));
  return blogRef;
}
const getReviews = function getReviews() {

}

const apiFunctions = {
  getBlogs,
  getReviews,
}

export default apiFunctions;
//const analytics = getAnalytics(app);