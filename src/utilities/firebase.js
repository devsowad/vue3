import firebase from "firebase/app"
import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDX2Jh3ytEuOa1QfQ8vxbers2I3r-Rpnbc",
  authDomain: "vue3-58ebe.firebaseapp.com",
  projectId: "vue3-58ebe",
  storageBucket: "vue3-58ebe.appspot.com",
  messagingSenderId: "504922399100",
  appId: "1:504922399100:web:e540444312d75e5bbd84f9",
}

firebase.initializeApp(firebaseConfig)

export const db = firebase.database()

export const chatsRef = db.ref("chats")

export default firebase
