import './App.css';
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/analytics'

firebase.initializeApp({
  apiKey: "AIzaSyAGe7iMyy8i8raxEgn4zP9RHv6xxTGd_yo",
  authDomain: "chat-project-7b45d.firebaseapp.com",
  projectId: "chat-project-7b45d",
  storageBucket: "chat-project-7b45d.appspot.com",
  messagingSenderId: "543473326045",
  appId: "1:543473326045:web:8e9808af06bc6f6acf4834",
  measurementId: "G-0N1SZEC11C"
});

function App() {
  return (
    <h1>chat project</h1>
  );
}

export default App;
