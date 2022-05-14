// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxWhs0Fi7TFSG3RYZ0of2AgYCxZMh89MU",
  authDomain: "bike-website-9e46e.firebaseapp.com",
  projectId: "bike-website-9e46e",
  storageBucket: "bike-website-9e46e.appspot.com",
  messagingSenderId: "1067904963950",
  appId: "1:1067904963950:web:8beac258e7c184be3ddd7f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
