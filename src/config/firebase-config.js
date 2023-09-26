import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC5ZYhKbJe9SgTi2lMmz7E-3Smg-6i8ZIQ",
  authDomain: "gorudofy.firebaseapp.com",
  projectId: "gorudofy",
  storageBucket: "gorudofy.appspot.com",
  messagingSenderId: "620007251186",
  appId: "1:620007251186:web:33456f31e18a801329846b",
  measurementId: "G-JW5VW5V8EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);