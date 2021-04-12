import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDKj4b3tvLvRrF0r3UXvitqO7ir4C270PE",
    authDomain: "weather-app-22cd7.firebaseapp.com",
    projectId: "weather-app-22cd7",
    storageBucket: "weather-app-22cd7.appspot.com",
    messagingSenderId: "1027795966110",
    appId: "1:1027795966110:web:4eeada2fed813c56e4438f"
  };
  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();


  export {firestore, firebase as default};