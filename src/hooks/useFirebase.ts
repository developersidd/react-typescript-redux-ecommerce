import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, getIdToken, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useAppDispatch } from "../redux/app/hooks";
import { userLoggedIn, userLoggedOut } from "../redux/features/auth/authSlice";
import initAuth from './../firebase/firebase.init';

const useFirebase = () => {
    initAuth();
    const dispatch = useAppDispatch()
    const auth = getAuth();

    // sign in
    const googleSignIn = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    }

    //update user information
    const updateUser = (name: string): Promise<void> | undefined => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name, photoURL: "https://cambodiaict.net/wp-content/uploads/2019/12/computer-icons-user-profile-google-account-photos-icon-account.jpg"
            })
        }
    }

    // create user 
    const createUser = ({ email, password }: { email: string, password: string }) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user =================> 
    const logInUser = ({ email, password }: { email: string, password: string }) => {
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
                dispatch(userLoggedIn({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
                getIdToken(user)
                    .then(idToken => localStorage.setItem("idToken", idToken));
            } else {
                dispatch(userLoggedOut());
            }
        });
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