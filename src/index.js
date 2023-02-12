import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYexnkNeKq2R9grl72hXY1rZf5G8nOAys",
  authDomain: "tiendita-fb29e.firebaseapp.com",
  projectId: "tiendita-fb29e",
  storageBucket: "tiendita-fb29e.appspot.com",
  messagingSenderId: "541355859361",
  appId: "1:541355859361:web:2ed70b0e059c0e4bd0bfe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
