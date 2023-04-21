import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBEZzEfjJAE4ef39I55iu5yznpJAJhdbAY",
  authDomain: "learn-firebase-c30d5.firebaseapp.com",
  projectId: "learn-firebase-c30d5",
  storageBucket: "learn-firebase-c30d5.appspot.com",
  messagingSenderId: "969886817016",
  appId: "1:969886817016:web:59ef0e62f1ad43241ab90d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//init services
//Them, xoa, sua, lay data
const db = getFireStore();
