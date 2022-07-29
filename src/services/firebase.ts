// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFF_FJQjha5ZBnNu2DgQvjAPtDvXBiGks",
  authDomain: "autentificacao-55c4c.firebaseapp.com",
  projectId: "autentificacao-55c4c",
  storageBucket: "autentificacao-55c4c.appspot.com",
  messagingSenderId: "560949073357",
  appId: "1:560949073357:web:35fdb997989c9a11a0e084"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)