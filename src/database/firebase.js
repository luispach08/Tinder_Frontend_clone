import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBInpVoYFURx4KzwtkAvCDu9NXZ0PcEhHE",
    authDomain: "tinder-clone-db4c7.firebaseapp.com",
    projectId: "tinder-clone-db4c7",
    storageBucket: "tinder-clone-db4c7.appspot.com",
    messagingSenderId: "114503357841",
    appId: "1:114503357841:web:5f25442ec4ba7a22fab630",
    measurementId: "G-XWWE3T0GTG"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;