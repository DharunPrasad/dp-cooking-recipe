import firebase from "firebase/app";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB3GwFHPN1TQduwEtaDP-yFxyFrlwbekA8",
    authDomain: "cooking-ninja-site-e6cc3.firebaseapp.com",
    projectId: "cooking-ninja-site-e6cc3",
    storageBucket: "cooking-ninja-site-e6cc3.appspot.com",
    messagingSenderId: "1032245419974",
    appId: "1:1032245419974:web:724b7c628b34e80ccddcc7"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
 const projectFirestore =  firebase.firestore()

 export {   projectFirestore    }