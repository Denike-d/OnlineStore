import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbxYk7u5Ek83A0t42TSGzZi5SuUfiDbYM",
  authDomain: "e-commerce-b7c4e.firebaseapp.com",
  projectId: "e-commerce-b7c4e",
  storageBucket: "e-commerce-b7c4e.appspot.com",
  messagingSenderId: "658344067880",
  appId: "1:658344067880:web:32b0ffe3d98d11a7a8861d",
};

// initialize firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

//initialize services

export const db = getFirestore(app);

export const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

export const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
//collection Reference
// const colRef = collection(db, "products");

// get collection data

// getDocs(colRef).then((sorted) => {
//   console.log("This", sorted.docs);
// });
