import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDEShYCZAOEQ1uJLSHmCaA4zhTZoySL5yU",
  authDomain: "rent-flip-admin.firebaseapp.com",
  projectId: "rent-flip-admin",
  storageBucket: "rent-flip-admin.appspot.com",
  messagingSenderId: "387350099357",
  appId: "1:387350099357:web:65806e74cbeda93ba42b74",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
