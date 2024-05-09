// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWOLUO__cARTCnsGaTo-dquyMPU-7acHI",
  authDomain: "more-85e79.firebaseapp.com",
  projectId: "more-85e79",
  storageBucket: "more-85e79.appspot.com",
  messagingSenderId: "776359225833",
  appId: "1:776359225833:web:a17bbab6af48bd60574378",
  measurementId: "G-Z9D3PQDXGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);