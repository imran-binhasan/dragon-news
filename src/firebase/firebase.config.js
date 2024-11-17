// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiEjSERdaRCu1l4UqiFGt6o08Cgq9llhw",
  authDomain: "dragon-news-database.firebaseapp.com",
  projectId: "dragon-news-database",
  storageBucket: "dragon-news-database.firebasestorage.app",
  messagingSenderId: "210077567915",
  appId: "1:210077567915:web:ec024ebb194947ee1ee0ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)