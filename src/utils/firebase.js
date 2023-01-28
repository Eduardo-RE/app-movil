import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import "firebase/compat/auth";
import {
  getAuth,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqWdmHZnXU6LGFgUfkV5wjupXM2DCXSZk",
  authDomain: "agenda-app-234b5.firebaseapp.com",
  projectId: "agenda-app-234b5",
  storageBucket: "agenda-app-234b5.appspot.com",
  messagingSenderId: "795922447143",
  appId: "1:795922447143:web:dc74b6d28d2acc2b758702",
  measurementId: "G-YHEZFZZ98L",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const firestore = getFirestore(firebaseapp);
const database = getDatabase(firebaseapp);
const auth = firebase.auth();
const storage = getStorage(firebaseapp);
const authG = getAuth(firebaseapp);

export {
  auth,
  firestore,
  firebaseapp,
  storage,
  authG,
  database,
  browserSessionPersistence,
  setPersistence,
  signInWithEmailAndPassword,
};
