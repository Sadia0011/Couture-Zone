// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC08UE5g9LOBIXaaq7e8877dLCDHLLT-XQ",
  authDomain: "fashion-and-apparel-8b5e1.firebaseapp.com",
  projectId: "fashion-and-apparel-8b5e1",
  storageBucket: "fashion-and-apparel-8b5e1.appspot.com",
  messagingSenderId: "145325586423",
  appId: "1:145325586423:web:8cbb35b23ff3abd0d220f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;