import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";

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
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export default auth