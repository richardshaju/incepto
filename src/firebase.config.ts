// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPMQJzir4sgMqaKE7fib1JvG8rgRXaKTk",
    authDomain: "incepto-3633d.firebaseapp.com",
    projectId: "incepto-3633d",
    storageBucket: "incepto-3633d.appspot.com",
    messagingSenderId: "263849802627",
    appId: "1:263849802627:web:9e94655dba0ee2d6fad4b6"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);