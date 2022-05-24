import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signIn(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function logIn(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logOut() {
        return auth.signOut(); 
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(
            user => {
                setLoading(false) 
                setCurrentUser(user)
            });
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signIn,
        logIn,
        logOut,
        resetPassword
    }

    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    );
}
