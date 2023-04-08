import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
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

    // observer the user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("user:", user)
                dispatch(userLoggedIn({ email: user.email, name: user.displayName, photo: user.photoURL }))
            } else {
                dispatch(userLoggedOut());
            }
        });
        return () => unsubscribed;
    }, []);

    return {
        createUser,
        logOut,
        googleSignIn,
        logInUser,
        updateUser
    }
}

export default useFirebase;