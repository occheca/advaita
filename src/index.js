//import './config/i18next-config';

import './index.css';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);


/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUwTFh_I5hQnEQ09o7CYJ86950mKKo4dg",
  authDomain: "advaita-bb136.firebaseapp.com",
  projectId: "advaita-bb136",
  storageBucket: "advaita-bb136.appspot.com",
  messagingSenderId: "933077036417",
  appId: "1:933077036417:web:1181c895e05f62e943cc80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/