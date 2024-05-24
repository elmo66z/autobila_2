
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDQXlq6ouGbhM73JR4Pw8MxH41PjS-mHX4",
  authDomain: "test-c2b41.firebaseapp.com",
  projectId: "test-c2b41",
  storageBucket: "test-c2b41.appspot.com",
  messagingSenderId: "383134843981",
  appId: "1:383134843981:web:1243e8e8d8ac6d2b814804",
  measurementId: "G-9PDBZF4YTT"
};

const app = initializeApp(firebaseConfig);
export const GooglePovider = new GoogleAuthProvider ;
export const auth = getAuth(app);                   