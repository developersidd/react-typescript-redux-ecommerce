import React from 'react'
import { NavLink } from 'react-router-dom'
import useFirebase from '../hooks/useFirebase';

const LogOut = () => {
    const {  logOut  } = useFirebase();
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="font-bold text-2xl text-green-400 mb-6">Your Are signed in successfully to ABshop </h2>
                <NavLink to="" onClick={logOut} className="bg-green-400 rounded-3xl px-6 py-3 font-semibold hover:bg-green-600"
                >Log out </NavLink>
            </div>
        </div>
    )
}

export default LogOut;