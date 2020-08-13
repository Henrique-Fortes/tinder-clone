import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCvORssjpHAM2U7Z_v6xgyyEQEx5zs8QHg",
    authDomain: "tinder-clone-fc9e9.firebaseapp.com",
    databaseURL: "https://tinder-clone-fc9e9.firebaseio.com",
    projectId: "tinder-clone-fc9e9",
    storageBucket: "tinder-clone-fc9e9.appspot.com",
    messagingSenderId: "223330186173",
    appId: "1:223330186173:web:cf902ce5826b121bc118d4",
    measurementId: "G-DTQGM0VLXY"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();

  export default database;