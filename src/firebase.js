import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyDpA36GzROS8AUIqGvYI-dQaqE8eToQhZA",
  authDomain: "chat-app-like-slack.firebaseapp.com",
  databaseURL: "https://chat-app-like-slack.firebaseio.com",
  projectId: "chat-app-like-slack",
  storageBucket: "chat-app-like-slack.appspot.com",
  messagingSenderId: "797442067781",
  appId: "1:797442067781:web:899023e621bf2a78"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;