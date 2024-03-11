// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9yDzhbDf1hLGC8DpzJ4oFC6h82IBIckY",
  authDomain: "muvidb-ce460.firebaseapp.com",
  projectId: "muvidb-ce460",
  storageBucket: "muvidb-ce460.appspot.com",
  messagingSenderId: "65031476087",
  appId: "1:65031476087:web:62c86f7b0043eb26688772"
};

// Initialize Firebase
 export const FIREBASE_APP = initializeApp(firebaseConfig);
 export const FIREBASE_AUTH = getAuth( FIREBASE_APP)