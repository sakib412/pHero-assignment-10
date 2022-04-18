// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBMEE3TSd3ppVZ8GQSV488NGefP1I9SnJ0",
    authDomain: "wild-hunter-643cf.firebaseapp.com",
    projectId: "wild-hunter-643cf",
    storageBucket: "wild-hunter-643cf.appspot.com",
    messagingSenderId: "479753273208",
    appId: "1:479753273208:web:ac6ada5f43db34ee0c928d",
    measurementId: "G-60Z0D6H3R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app