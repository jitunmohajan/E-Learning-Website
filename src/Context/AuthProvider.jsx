import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
    }

    const signInWithGithub =()=>{
        return signInWithPopup(auth, githubProvider)
    }

    const createUser =(email, password)=>{
       return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile =(profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    const signIn =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        return signOut(auth);
    }



    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                setUser(currentUser);
        });
        
        return ()=>{
            unSubscribe();
        };
        
    },[])

    const authInfo ={user, setUser,signInWithGoogle, logOut, signInWithGithub, createUser, signIn, updateUserProfile};
    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};



export default AuthProvider;