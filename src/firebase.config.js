import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBKhE10aOh1jJD0c5dBJO3PqYn5qDeSXzQ",
  authDomain: "fooddelivery-b5866.firebaseapp.com",
  databaseURL: "https://fooddelivery-b5866-default-rtdb.firebaseio.com",
  projectId: "fooddelivery-b5866",
  storageBucket: "fooddelivery-b5866.appspot.com",
  messagingSenderId: "220191345048",
  appId: "1:220191345048:web:13bc3c5003383e2ecc43ed",
};
const app = getApps.length > 0 ? getApp : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
