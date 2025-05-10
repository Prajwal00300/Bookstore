// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhfDqnPUdD8dAiGJmzJVuq0rANmYKiuzs",
  authDomain: "mern-book-inventory-e1177.firebaseapp.com",
  projectId: "mern-book-inventory-e1177",
  storageBucket: "mern-book-inventory-e1177.firebasestorage.app",
  messagingSenderId: "188109977893",
  appId: "1:188109977893:web:ef69b257931e28182142cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;