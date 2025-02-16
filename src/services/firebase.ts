import { FirebaseOptions, initializeApp } from "firebase/app";

const config: FirebaseOptions = {
    apiKey: "AIzaSyBAGd9DDTtn8aAeab4Ydq65yErWAzO7mPg",
    appId: "1:262073852184:web:b7097acec54647a2f5fe6d",
    authDomain: "pulsecheck-7cf2b.firebaseapp.com",
    measurementId: "G-TZTCLTT9EK",
    messagingSenderId: "262073852184",
    projectId: "pulsecheck-7cf2b",
    storageBucket: "pulsecheck-7cf2b.firebasestorage.app"
}

const app = initializeApp(config);

export default app;
