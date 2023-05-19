import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/FIrebase";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // all provider
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSing = () => signInWithPopup(auth, googleProvider);
  const gitHubSign = () => signInWithPopup(auth, gitHubProvider);
  const logOutUser = () => signOut(auth);

  useEffect(() => {
    const unSubscribed = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser), setLoading(false);
    });

    return () => unSubscribed();
  }, []);

  const authInfo = {
    user,
    createUser,
    loginUser,
    logOutUser,
    loading,
    googleSing,
    gitHubSign,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
