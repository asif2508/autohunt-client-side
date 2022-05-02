// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5c8adhjhoG2BdaKN7oEfwYHQXouNWyC0",
  authDomain: "auto-hunt-73675.firebaseapp.com",
  projectId: "auto-hunt-73675",
  storageBucket: "auto-hunt-73675.appspot.com",
  messagingSenderId: "785489023304",
  appId: "1:785489023304:web:22220c321aad7cdb7ae37d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);

export default auth;