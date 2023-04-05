// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore/lite"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnjtxUioXBec0icTcK6VYfDFqJZ2x_Egg",
  authDomain: "jornada---tiktok-3ea4d.firebaseapp.com",
  projectId: "jornada---tiktok-3ea4d",
  storageBucket: "jornada---tiktok-3ea4d.appspot.com",
  messagingSenderId: "507537097751",
  appId: "1:507537097751:web:c09dc08a7e611273eb4852"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;