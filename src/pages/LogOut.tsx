import { NavLink, useNavigate } from 'react-router-dom';
import useFirebase from '../hooks/useFirebase';
import SetPageTitle from '../ui/SetPageTitle';

const LogOut = () => {
    const { logOut } = useFirebase();
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut();
        navigate("/");
        localStorage.removeItem("idToken");
    }
    return (
        <div className="h-screen flex items-center justify-center">
                    <SetPageTitle title="Logout" />

            <div className="text-center">
                <h2 className="font-bold text-2xl text-slate-800 mb-6">Logout From AB's Shop</h2>
                <NavLink to="/" onClick={handleLogout} className="bg-green-400 text-white rounded-3xl px-6 py-3 font-semibold hover:bg-green-600"
                >Log out </NavLink>
            </div>
        </div>
    )
}

export default LogOut;