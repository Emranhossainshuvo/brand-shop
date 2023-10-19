import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const AuthContext = createContext(null); 

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const emailPasswordAuth = (email, password) => {
        setLoading(true); 
        return createUserWithEmailAndPassword(auth, email, password)
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