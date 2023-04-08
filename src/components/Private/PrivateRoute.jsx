import { Navigate, Outlet } from 'react-router';
import Loading from '../../components/ui/Loading';
import useAuth from '../../hooks/useAuth';
import useCheckAuth from '../../hooks/useCheckAuth';
const PrivateRoute = () => {
    const isLoggedIn = useAuth();
    const isLoading = useCheckAuth()
    if (!isLoading) {
        return <Loading />
    } else {
        return isLoggedIn ? <Outlet /> : <Navigate to="/login" />
    }


}

export default PrivateRoute
