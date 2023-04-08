import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { userLoggedIn, userLoggedOut } from "../redux/features/auth/authSlice";
import initAuth from './../firebase/firebase.init';
const useFirebase = () => {
    initAuth();
    const dispatch = useDispatch()
    const auth = getAuth();

    // sign in
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    //update user information
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg"
        })
    }

    // create user 
    const createUser = ({ email, password }) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user =================> 
    const logInUser = ({ email, password }) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout
    const logOut = () => {
        signOut(auth)
            .then(result => {
                dispatch(userLoggedOut());
            })
            .catch(error => {

            })
    }
    
    const userObserver = () => {
         onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user)
                    .then(idToken => localStorage.setItem("idToken", idToken));
                dispatch(userLoggedIn(user))
            } else {
                dispatch(userLoggedOut());
            }
        })
    }
    
    return {
        createUser,
        logOut,
        googleSignIn,
        logInUser,
        updateUser,
        userObserver,
    }
}

export default useFirebase;