import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDR03pxFk7G4zrCihy3zN3_73zbDII07aI",
  authDomain: "cooking-app-9c952.firebaseapp.com",
  projectId: "cooking-app-9c952",
  storageBucket: "cooking-app-9c952.appspot.com",
  messagingSenderId: "686790489457",
  appId: "1:686790489457:web:3e780ed07e7b0ceffeb2d0",
};

firebase.initializeApp(firebaseConfig); // initialise firebase

const projectFirestore = firebase.firestore(); // initialise services

export { projectFirestore };
