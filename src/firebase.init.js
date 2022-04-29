// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrQErHVf07n1F3rCChlSqV5bDI4rpi5t8",
    authDomain: "azimuth-warehouse.firebaseapp.com",
    projectId: "azimuth-warehouse",
    storageBucket: "azimuth-warehouse.appspot.com",
    messagingSenderId: "899042660692",
    appId: "1:899042660692:web:d9c1a96991fe837513b8c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;