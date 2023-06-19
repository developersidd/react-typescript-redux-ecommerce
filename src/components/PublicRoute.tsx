import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = () => {
    const isLoggedIn = useAuth();
    return !isLoggedIn ? <Outlet /> : <Navigate to="/" />
}

export default PublicRoute;