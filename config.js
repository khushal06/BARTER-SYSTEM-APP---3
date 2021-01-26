import firebase from 'firebase'

import firestore from "firebase/firestore"

import auth from "firebase/auth"

var firebaseConfig = {
  apiKey: "AIzaSyAMYxoeWEDE90k-o7MHPkg0v-jcMRftblI",
  authDomain: "loginpra-a7a2e.firebaseapp.com",
  databaseURL: "https://loginpra-a7a2e-default-rtdb.firebaseio.com",
  projectId: "loginpra-a7a2e",
  storageBucket: "loginpra-a7a2e.appspot.com",
  messagingSenderId: "220762737625",
  appId: "1:220762737625:web:417f9d67cd5f911f6f27c8",
  measurementId: "G-SCQ7PCQERE"
};

firebase.initializeApp(firebaseConfig)

firebase.firestore()
firebase.auth()

export default firebase