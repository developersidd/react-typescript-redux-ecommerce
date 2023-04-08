import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/features/auth/authSelector";

const useCheckAuth = () => {
    const { user } = useSelector(selectAuth) || {};
    const [isChecked, setIsChecked] = useState(false);
    useEffect(() => {
        const auth = localStorage.getItem('idToken');
        if (auth && user?.email) {
        }
        setTimeout(() =>{
            setIsChecked(true);
        }, 1200)
    }, [user]);
    return isChecked;
}

export default useCheckAuth