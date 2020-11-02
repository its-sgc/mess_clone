import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDv3Ih-sFy2uPKJsm9ET6261B5sR0E-TiQ",
    authDomain: "facebook-mess-clone-da0bf.firebaseapp.com",
    databaseURL: "https://facebook-mess-clone-da0bf.firebaseio.com",
    projectId: "facebook-mess-clone-da0bf",
    storageBucket: "facebook-mess-clone-da0bf.appspot.com",
    messagingSenderId: "489091140252",
    appId: "1:489091140252:web:594d740c9d5c2f00ebbb59",
    measurementId: "G-7GF1JKZQWR",
});
const db = firebaseConfig.firestore();
export default db;