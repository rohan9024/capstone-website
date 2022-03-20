
import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite'
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBtryojhPPfq-Mt0deItKvG23BmwoxYwuo",
    authDomain: "social-media-manager-912de.firebaseapp.com",
    projectId: "social-media-manager-912de",
    storageBucket: "social-media-manager-912de.appspot.com",
    messagingSenderId: "268200536269",
    appId: "1:268200536269:web:7b531baeb61ce0b91d2184",
    measurementId: "G-LYPZJ7GBMN"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)


export { db, auth };


