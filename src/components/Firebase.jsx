// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXLWFg8jYGtR_2R5-UxvFo-Xvyf5XvmV4",
  authDomain: "test-dd528.firebaseapp.com",
  projectId: "test-dd528",
  storageBucket: "test-dd528.appspot.com",
  messagingSenderId: "858529488796",
  appId: "1:858529488796:web:eaf74778ad59b863643259",
  measurementId: "G-5NRPY9LRF6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();



export { auth, googleProvider };
export default app;