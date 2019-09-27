import React from 'react';
import './App.css';
const firebase=require('firebase');
require('firebase/firestore');
firebase.initializeApp({
  apiKey: "AIzaSyA8_AtXoMbiI0IF9qAHQcyyAh8d1yvbxyQ",
  authDomain: "chat-45840.firebaseapp.com",
  databaseURL: "https://chat-45840.firebaseio.com",
  projectId: "chat-45840",
  storageBucket: "chat-45840.appspot.com",
  messagingSenderId: "347711432473",
  appId: "1:347711432473:web:5341615762975098b88788",
  measurementId: "G-3R2PD125S7"
});

function App() {
  return (
    <div>
      <div>dashboard</div>
      <div>Login Form</div>
      <div>Sign Up</div>

    </div>
  );
}

export default App;
