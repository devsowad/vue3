import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDX2Jh3ytEuOa1QfQ8vxbers2I3r-Rpnbc",
  authDomain: "vue3-58ebe.firebaseapp.com",
  projectId: "vue3-58ebe",
  storageBucket: "vue3-58ebe.appspot.com",
  messagingSenderId: "504922399100",
  appId: "1:504922399100:web:e540444312d75e5bbd84f9"
};

firebase.initializeApp(firebaseConfig);

export default firebase