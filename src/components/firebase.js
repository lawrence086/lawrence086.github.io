// import firebase from "firebase";
// import 'firebase/auth'
import 'firebase/firestore'
import firebase from 'firebase/app';

const Config = {
    apiKey: "AIzaSyA9cze7eePC8Qxfy6j-ZGUfklNUcWj_Oms",
    authDomain: "codetribe1-6f45f.firebaseapp.com",
    projectId: "codetribe1-6f45f",
    storageBucket: "codetribe1-6f45f.appspot.com",
    messagingSenderId: "987887605646",
    appId: "1:987887605646:web:a6e493811db84102a8f6df",
    measurementId: "G-HCVYR3VH9H"
  };
  // Initialize Firebase
  firebase.initializeApp(Config);
 
  // export const auth = firebase.auth()
  export const db = firebase.firestore()
 
export default firebase  