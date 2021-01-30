// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDNpu-pgzQyQ_jnwpibDVLmSxBCVij4srk",
    authDomain: "chargebee-clone.firebaseapp.com",
    databaseURL: "https://chargebee-clone.firebaseio.com",
    projectId: "chargebee-clone",
    storageBucket: "chargebee-clone.appspot.com",
    messagingSenderId: "716975735650",
    appId: "1:716975735650:web:55bad81533a1adb3d5223b",
    measurementId: "G-877DP3Y3LE"
  };
  
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };