import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDWUl8lW1M2ZEAvw4Cw4VnP3KxjfCThQkk",
    authDomain: "todo-ecebd.firebaseapp.com",
    databaseURL: "https://todo-ecebd.firebaseio.com",
    projectId: "todo-ecebd",
    storageBucket: "todo-ecebd.appspot.com",
    messagingSenderId: "1053451922343",
    appId: "1:1053451922343:web:849eff6e251ac8e1136482",
    measurementId: "G-0ERGV5QKDM"
  });

  const db = firebaseApp.firestore();
  export default db ;