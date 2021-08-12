import React from "react";
import firebase from "firebase/app";
import { auth } from "../../services/firebase";

const SignIn = () => {
  return (
    <button
      onClick={() =>
        auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
      }
    >
      sign in with google
    </button>
  );
};

export default SignIn;
