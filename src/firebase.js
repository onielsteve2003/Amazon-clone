import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyArTLCxcSYYZIlk2NreyCIiMgEeoG6WcYE",
  authDomain: "clone-c9183.firebaseapp.com",
  projectId: "clone-c9183",
  storageBucket: "clone-c9183.appspot.com",
  messagingSenderId: "380220989420",
  appId: "1:380220989420:web:28682cbfe4c3c04d52eac9",
  measurementId: "G-RPVBPG1CTF"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }