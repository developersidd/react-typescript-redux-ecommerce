import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuth } from '../../redux/features/auth/authSelector';

const MobileMenu = () => {
    const { user = {} } = useSelector(selectAuth);

    return (
        <div className="invisible md:visible absolute top-28 z-10 flex justify-center items-center flex-col text-center left-10 right-0  bg-white shadow-xl rounded-md p-7 w-80">
            {user?.email && <>
                <img className="rounded-full w-20  h-20" src={user?.photo} alt={user?.name} />
                <span className="mb-4 text-xl font-semibold">{user?.name} </span></>}
            <ul className="font-semibold">
                {!user?.email ?
                    <div className="hidden md:block">
                        <NavLink to="/register" className="mr-2 md:mr-5 text-base md:text-lg">Register </NavLink>
                        <NavLink to="/login" className="mr-2 md:mr-5 text-base md:text-lg">Login </NavLink>
                    </div>
                    :
                    <div className="hidden md:block">
                        <div className="flex items-center">
                            <NavLink to="/cart" className="mr-2 md:mr-5 text-base md:text-lg">Cart </NavLink>
                            <NavLink to="/logout" className="mr-2 md:mr-5 text-base md:text-lg">Logout </NavLink>
                        </div>
                    </div>
                }
            </ul>
        </div>
    )
}

export default MobileMenu
