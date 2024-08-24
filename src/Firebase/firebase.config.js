// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrc2AfedwTGPM1dvqY4oUa90GCKcTwTJ0",
  authDomain: "codeworld-39.firebaseapp.com",
  projectId: "codeworld-39",
  storageBucket: "codeworld-39.appspot.com",
  messagingSenderId: "780742529076",
  appId: "1:780742529076:web:5769c953f392a9c0af7a61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);