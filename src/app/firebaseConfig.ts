// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRk7tff79i9B-6Vii9A6bsPpAaHq2gZYM",
    authDomain: "project5-1c503.firebaseapp.com",
    databaseURL: "https://project5-1c503-default-rtdb.firebaseio.com",
    projectId: "project5-1c503",
    storageBucket: "project5-1c503.firebasestorage.app",
    messagingSenderId: "94618979586",
    appId: "1:94618979586:web:4aef678c313ecf7412061b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// tao db
export const dbFirebase = getDatabase(app);
// auth
export const authFirebase = getAuth(app);
