import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhaW_yxO5xwPaKPsa-Frlrx_sqN7UjcuY",
  authDomain: "olxclone-2649c.firebaseapp.com",
  projectId: "olxclone-2649c",
  storageBucket: "olxclone-2649c.appspot.com",
  messagingSenderId: "271967907657",
  appId: "1:271967907657:web:890b0abc1c8bd5e3553498",
  measurementId: "G-YH61EXHP63",
};
export default firebase.initializeApp(firebaseConfig);
