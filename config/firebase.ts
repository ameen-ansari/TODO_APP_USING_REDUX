// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJM1ino6ripy86GyM_T8jImi45FzyWbfo",
  authDomain: "my-app-bea3a.firebaseapp.com",
  projectId: "my-app-bea3a",
  storageBucket: "my-app-bea3a.appspot.com",
  messagingSenderId: "184696617113",
  appId: "1:184696617113:web:d58ede1a4754d5ec80a008"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app , db}