import firebase from "firebase";
require("@firebase/firestore");


  const firebaseConfig = {
    apiKey: "AIzaSyBcoXwxu27eztV-wecnnwTM_S7qG1gi57w",
    authDomain: "library-26f74.firebaseapp.com",
    projectId: "library-26f74",
    storageBucket: "library-26f74.appspot.com",
    messagingSenderId: "429098664056",
    appId: "1:429098664056:web:376b5db3b0f9cc9373ad8d"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
