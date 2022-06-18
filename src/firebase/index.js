import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyA_0u2tKHexaFA3AsAUgVSaKu0WVaOqAfA",
    authDomain: "sign-in-8c39a.firebaseapp.com",
    projectId: "sign-in-8c39a",
    storageBucket: "sign-in-8c39a.appspot.com",
    messagingSenderId: "358590987852",
    appId: "1:358590987852:web:ceb342a5dce5c651ad7ee9",
    measurementId: "G-YT8XF4Z7KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)