import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyACbe10AV_dIHk6h_IyGn617o2j4_c9f4k",
  authDomain: "promanager-e9eb4.firebaseapp.com",
  databaseURL: "https://promanager-e9eb4.firebaseio.com",
  projectId: "promanager-e9eb4",
  storageBucket: "promanager-e9eb4.appspot.com",
  messagingSenderId: "261257762430",
  appId: "1:261257762430:web:b64971f4cc170e4d58ea2f",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;