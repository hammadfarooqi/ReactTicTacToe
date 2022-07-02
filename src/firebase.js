// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsGUQp38mj_xpzj9Ycc3zh9IuEkDhLq58",
  authDomain: "tictactoe-b1dc6.firebaseapp.com",
  projectId: "tictactoe-b1dc6",
  storageBucket: "tictactoe-b1dc6.appspot.com",
  messagingSenderId: "740361962657",
  appId: "1:740361962657:web:04006bf926ad49f9d5dce0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore()