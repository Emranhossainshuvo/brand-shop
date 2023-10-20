import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useLocation } from "react-router-dom";

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);

    const emailPasswordAuth = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const githubSignIn = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const emailPasswordLogout = () => {
        setLoading(true)
        return signOut(auth); 
    }

    const emailPasswordSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe(); 
        }
    }, [])

    const authData = {
        user, 
        githubSignIn,
        loading, 
        googleSignIn, 
        emailPasswordAuth, 
        emailPasswordLogout, 
        emailPasswordSignIn
    }

    return (
        <AuthContext.Provider value={authData}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;