// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
// import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import "firebase/compat/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCPa9aWyZ9x4tNhNFThlw9ckCxkAK_5p0",
  authDomain: "clone-87f1d.firebaseapp.com",
  projectId: "clone-87f1d",
  storageBucket: "clone-87f1d.appspot.com",
  messagingSenderId: "1060736761694",
  appId: "1:1060736761694:web:089548b37c8e2266a119cf",
  measurementId: "G-WRQEE95PVY",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth();
const db = firebaseApp.firestore();

export { db, auth };
