import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

//initialize services

export const db = getFirestore(app);

//collection Reference
// const colRef = collection(db, "products");

// get collection data

// getDocs(colRef).then((sorted) => {
//   console.log("This", sorted.docs);
// });
