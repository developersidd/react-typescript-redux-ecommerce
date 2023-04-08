import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { selectAuth } from '../../redux/features/auth/authSelector';
import { selectCart } from '../../redux/features/cart/cartSelector';
import { selectFilter } from '../../redux/features/filter/filterSelector';
import { searchBy } from '../../redux/features/filter/filterSlice';
const Navbar = () => {

    const { user = {} } = useSelector(selectAuth);
    const { bookedProducts = [] } = useSelector(selectCart) || {};
    const { category, sortBy, search } = useSelector(selectFilter) || {};
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // debounce handler
    const handleSearchDebounce = (cb, delay) => {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => cb(...args), delay);
        }
    };

    const searchTask = (value) => {
        dispatch(searchBy(value));
        navigate("/shop");
    }


    // handle debounce helper 
    const handleSearch = handleSearchDebounce(searchTask, 300);

    return (
        <div className="shadow-lg">
            <div className="flex items-center h-16 md:h-20  justify-between px-4 md:px-5 lg:px-10 ">
                <div className="xl:flex-1  hidden lg:block">
                    <div className="flex items-center">
                        <span>
                            Eng
                        </span>
                        <div className="relative flex items-center ml-3">
                            <input onChange={(e) => handleSearch(e.target.value)} type="text" className="p-1 border border-gray-300 outline-none" />
                            <button className="h-4 absolute top-1 right-2">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1 md:text-center ">
                    <NavLink to="/">
                        <span className="md:text-2xl lg:text-3xl text-xl font-bold">ABShop </span>
                    </NavLink>
                </div>
                <div className="flex-1">
                    <ul className="flex text-lg items-center justify-end">
                        <NavLink to="/shop" className={({ isActive }) => `${isActive && "font-medium"} hidden md:block mr-2 md:mr-5 text-base md:text-lg`}>Shop </NavLink>

                        {!user?.email ?
                            <div className="">
                                <NavLink

                                    to="/register" className={({ isActive }) => `${isActive && "font-medium"} mr-2 md:mr-5 text-base md:text-lg`}>Register </NavLink>
                                <NavLink to="/login" className={({ isActive }) => `${isActive && "font-medium"}
                                mr-2 md:mr-5 text-base md:text-lg`}>Login </NavLink>
                            </div>
                            :
                            <div className="">
                                <div className="flex items-center">
                                    <NavLink to="/cart" className={({ isActive }) => `${isActive && "font-medium"} mr-2 md:mr-5 text-base md:text-lg`}>Cart </NavLink>
                                    <NavLink to="/logout" className={({ isActive }) => `${isActive && "font-medium"} mr-2 md:mr-5 text-base md:text-lg`}>Logout </NavLink>
                                    <img className="w-10 mr-4 shadow-xl rounded-full" src={user?.photo} alt={user?.email} />
                                </div>
                            </div>
                        }

                        <NavLink to="/cart" className={({ isActive }) => `${isActive && "font-medium"} relative  mr-5 md:mr-0 `}>
                            <ShoppingCartIcon className="h-6" />
                            <span className="bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-3 bottom-3 font-bold">
                                {bookedProducts.length}
                            </span>
                        </NavLink>

                    </ul>


                </div>
            </div>
        </div>
    )
}

export default Navbar;