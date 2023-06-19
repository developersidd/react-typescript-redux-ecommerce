import { Navigate, Outlet } from 'react-router';
import useAuth from '../../hooks/useAuth';
const PrivateRoute = () => {
    const isLoggedIn = useAuth();
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute
