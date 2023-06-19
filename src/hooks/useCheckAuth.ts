/*import { useState } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/features/auth/authSelector";

const useCheckAuth = () => {
    const { user } = useSelector(selectAuth) || {};
    const auth = localStorage.getItem('idToken');
    if (auth && user?.email) {
        setIsChecked(false);
    }
    return isChecked;
}

export default useCheckAuth*/