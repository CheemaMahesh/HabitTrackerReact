// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANVcJ1tRRfd2vhfuzMn2eV-boqs_EpWz8",
  authDomain: "habit-tracker-7d072.firebaseapp.com",
  projectId: "habit-tracker-7d072",
  storageBucket: "habit-tracker-7d072.appspot.com",
  messagingSenderId: "271306518570",
  appId: "1:271306518570:web:e66283d19788d6f3e01353"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig, "app");
export const db=getFirestore(app);