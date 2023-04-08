import { useSelector } from "react-redux";
import { selectAuth } from "../redux/features/auth/authSelector";

const useAuth = () => {
    const { user } = useSelector(selectAuth);
        if (user?.email && localStorage.getItem("idToken")) {
            return true
        } else {
            return false
        }
}

export default useAuth