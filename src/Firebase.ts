// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwalG7ufN89mqELLSfK9lIKvWFQ8pFc9I",
  authDomain: "portfolio-92163.firebaseapp.com",
  databaseURL:
    "https://portfolio-92163-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-92163",
  storageBucket: "portfolio-92163.appspot.com",
  messagingSenderId: "997720769086",
  appId: "1:997720769086:web:cd94ef9c7161416b84476f",
  measurementId: "G-ZBQQH0LL8Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

//realTime Database
export const rtd = getDatabase(app);
