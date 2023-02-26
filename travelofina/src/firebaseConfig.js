// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDPSFWnFEJwj6EF4TMDkEm2bwypPc4EsOE",
  authDomain: "travelofina-b57df.firebaseapp.com",
  projectId: "travelofina-b57df",
  storageBucket: "travelofina-b57df.appspot.com",
  messagingSenderId: "910234731835",
  appId: "1:910234731835:web:909866735980688562a31e",
  measurementId: "G-LSSKPNHEVV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);