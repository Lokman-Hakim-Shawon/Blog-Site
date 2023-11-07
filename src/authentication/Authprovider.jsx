import { createContext, useEffect, useState } from "react";
import app from "./firebase.config";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import PropTypes from 'prop-types'; // ES6

export const AuthContext=createContext(null)
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null)
    const [loading,setloading]=useState(true)
    useEffect(()=>{
           const onchange=onAuthStateChanged(auth,currentuser=>{
                // console.log('manage user successfull',currentuser)
                setuser(currentuser)
                setloading(false)
            })
        return ()=>{
            onchange()
        };
    },[])
    const createuser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const google=()=>{
        setloading(true)
       return signInWithPopup(auth,provider)
    }
    const login=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }
    const authInfo={
        user,
        loading,
        createuser,
        login,
        logout,
        google
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
Authprovider.propTypes={
    children:PropTypes.node
}
export default Authprovider;