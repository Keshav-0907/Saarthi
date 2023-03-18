import { initializeApp } from "firebase/app";
import {getAuth } from 'firebase/auth'
import {getFirestore} from '@firebase/firestore'
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'


const FirebaseConfig = {
  apiKey: "AIzaSyCa3wVQbAjK3brWvZUxTnSedBvXOp7jliU",
  authDomain: "saarthi2-b95b7.firebaseapp.com",
  projectId: "saarthi2-b95b7",
  storageBucket: "saarthi2-b95b7.appspot.com",
  messagingSenderId: "157391074602",
  appId: "1:157391074602:web:ed868a599c3eabefde5a53",
  measurementId: "G-FZ1489VB30"
};


firebase.initializeApp(FirebaseConfig);
const app = initializeApp(FirebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export default firebase