import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import app from "../firebase/firebase.config";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";



const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {


  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };


   const [user, setUser] = useState(null); 
   const [loading, setLoading] = useState(true);
   
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider)
  }

  const logOut = () => {
    return signOut(auth);
  }

  const updateUser = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    createUser,
    signIn,
    googleSignIn,
    logOut,
    user,
    setUser,
    updateUser,
    loading,
    setLoading,
    auth,
    theme,
    toggleTheme
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
