// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB6QHSoISmIVzdJV2lo148lHNOTpjzqSeg',
  authDomain: 'gk-test1-5bf3c.firebaseapp.com',
  projectId: 'gk-test1-5bf3c',
  storageBucket: 'gk-test1-5bf3c.appspot.com',
  messagingSenderId: '880199901174',
  appId: '1:880199901174:web:0eaf2b9f9b9c85e575b1d7',
  measurementId: 'G-69CFQ0WN06',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
