import { useEffect, useState } from 'react';
import initializeAuthenticaton from'../Firebase/firebase.init'
import {getAuth,signOut, signInWithPopup, GoogleAuthProvider ,onAuthStateChanged} from "firebase/auth";

initializeAuthenticaton()

const useFirebase = () => {
    const [user,setUser]=useState({})
    const[error,setError]=useState('')
    const auth=getAuth()
    const googoleProvider=new GoogleAuthProvider()
    const  signInUsingGoogle=()=>{
        signInWithPopup(auth,googoleProvider)
        .then(result=>{
           // The signed-in user info.
        
        setUser(result.user)
        })
        .catch(error=>{
            setError(error.massage)
        })
    }
useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
    })
},[])
const logout=()=>{
    signOut(auth)
    .then(()=>{
        setUser('')
    })
}
    return{
        user,
        error,
        logout,
        signInUsingGoogle
    }
};

export default useFirebase;