import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyAGe7iMyy8i8raxEgn4zP9RHv6xxTGd_yo",
    authDomain: "chat-project-7b45d.firebaseapp.com",
    projectId: "chat-project-7b45d",
    storageBucket: "chat-project-7b45d.appspot.com",
    messagingSenderId: "543473326045",
    appId: "1:543473326045:web:8e9808af06bc6f6acf4834",
    measurementId: "G-0N1SZEC11C",
}).auth();