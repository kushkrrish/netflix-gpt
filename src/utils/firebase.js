// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTVaai3P5a06Q-1Aob7I3KUgw1wUk6g3w",
  authDomain: "netfligpt-dd85e.firebaseapp.com",
  projectId: "netfligpt-dd85e",
  storageBucket: "netfligpt-dd85e.firebasestorage.app",
  messagingSenderId: "615658619208",
  appId: "1:615658619208:web:f352f833b617418168737d",
  measurementId: "G-F8N68WVQN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line 
const analytics = getAnalytics(app);

export const auth=getAuth();