import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.init";

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthPorvider = ({ children }) => {
  const [user, setUser] = useState({});

  const createuserLogin = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const usersignin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const userSignout = () => {
    return signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  const updateUserinfo=(profile)=>{
    return updateProfile(auth.currentUser,profile)
  }

  const authinfo = { createuserLogin, user, userSignout, usersignin,updateUserinfo };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthPorvider;
