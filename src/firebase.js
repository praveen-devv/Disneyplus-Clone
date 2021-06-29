import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyB4CqOAM29zfKDoqbXhP5QyfFHaHCnV_JE",
    authDomain: "hotstar-plus.firebaseapp.com",
    projectId: "hotstar-plus",
    storageBucket: "hotstar-plus.appspot.com",
    messagingSenderId: "544972352792",
    appId: "1:544972352792:web:a32e4a30ae3a798908c26d",
    measurementId: "G-QGFFM5J6VH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage()

  export {auth ,provider, storage};
  export default db;