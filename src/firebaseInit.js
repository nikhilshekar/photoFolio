
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuLsRTUhxdAoL1Rm5iTdBD7U2GUmUflqM",
  authDomain: "blogging-app-3df5a.firebaseapp.com",
  projectId: "blogging-app-3df5a",
  storageBucket: "blogging-app-3df5a.appspot.com",
  messagingSenderId: "484105256751",
  appId: "1:484105256751:web:d0dc5e82ef61328b62ebda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
