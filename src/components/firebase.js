import firebase from 'firebase';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBR6TwkFY1rOYZruAYqQ6lE2kJFMaTdfAU",
    authDomain: "portofolio-95e47.firebaseapp.com",
    projectId: "portofolio-95e47",
    storageBucket: "portofolio-95e47.appspot.com",
    messagingSenderId: "924427056451",
    appId: "1:924427056451:web:68e3e2c5c0f98f4c296bf6",
    measurementId: "G-4DRDNVTXVP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  let db = firebase.firestore();

  export {db};