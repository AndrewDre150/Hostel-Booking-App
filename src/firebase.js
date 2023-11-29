// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4BH4bE86NjIShXqO7Xwtt_MZLbbfqkwk",
  authDomain: "hostel-app1.firebaseapp.com",
  projectId: "hostel-app1",
  storageBucket: "hostel-app1.appspot.com",
  messagingSenderId: "859634241802",
  appId: "1:859634241802:web:5c324343cb3240c9132af3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export default app;
