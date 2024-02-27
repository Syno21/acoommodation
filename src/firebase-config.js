import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';



const firebaseConfig = {
  apiKey: "AIzaSyCO3HYkGw6JtIwZgfq5yimDp4EdW7G4vfE",
  authDomain: "residence-8408c.firebaseapp.com",
  projectId: "residence-8408c",
  storageBucket: "residence-8408c.appspot.com",
  messagingSenderId: "488052780876",
  appId: "1:488052780876:web:990199587d5edd2d4ba9e9",
  measurementId: "G-ZSFFFL086C"
};


firebase.initializeApp(firebaseConfig);



const firestore = firebase.firestore();



const storage = firebase.storage();


export { firestore, storage };