import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCPfgH-79IzltkXR0sguruzRDv_v9hOPFU",
    authDomain: "react-login-633b3.firebaseapp.com",
    projectId: "react-login-633b3",
    storageBucket: "react-login-633b3.appspot.com",
    messagingSenderId: "490085890810",
    appId: "1:490085890810:web:8de2eedcaed92e84a1a743"
});

export const auth = app.auth()
export default app