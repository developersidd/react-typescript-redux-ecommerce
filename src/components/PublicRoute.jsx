import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCheckAuth from "../hooks/useCheckAuth";
import Loading from "./ui/Loading";

const PublicRoute = () => {
    const isLoading = useCheckAuth()
    const isLoggedIn = useAuth();
    if (!isLoading) {
        return <Loading />
    }
    return !isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

export default PublicRoute;