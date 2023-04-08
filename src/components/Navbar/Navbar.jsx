import { ShoppingCartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuth } from '../../redux/features/auth/authSelector';
import { selectCart } from '../../redux/features/cart/selectCart';
const Navbar = () => {
    const [opened, setOpened] = useState(false);

    const { user = {} } = useSelector(selectAuth);
    const { bookedProducts = [] } = useSelector(selectCart) || {};
    const handleMenu = () => {
        setOpened(!opened);
    }

    return (
        <div className="shadow-lg">
            <div className="flex items-center h-16 md:h-20  justify-between px-4 md:px-5 lg:px-10 ">
                <div className="xl:flex-1  hidden lg:block">
                    <div className="flex items-center">
                        <span>
                            Eng
                        </span>
                        <div className="relative flex items-center ml-3">
                            <input type="text" className="p-1 border border-gray-300 outline-none" />
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
                        <NavLink to="/shop" className="hidden md:block mr-2 md:mr-5 text-base md:text-lg">Shop </NavLink>
                        {/*
                        {
                            clickedProduct.length >= 1 && <NavLink to="/orderReview" className="hidden md:block mr-2 md:mr-5 text-base md:text-lg">order Review </NavLink>
                        }*/}
                        {!user?.email ?
                            <div className="hidden md:block">
                                <NavLink to="/signup" className="mr-2 md:mr-5 text-base md:text-lg">Register </NavLink>
                                <NavLink to="/login" className="mr-2 md:mr-5 text-base md:text-lg">Login </NavLink>
                            </div>
                            :
                            <div className="hidden md:block">
                                <div className="flex items-center">
                                    <NavLink to="/cart" className="mr-2 md:mr-5 text-base md:text-lg">Cart </NavLink>
                                    <NavLink to="/logout" className="mr-2 md:mr-5 text-base md:text-lg">Logout </NavLink>
                                    <img className="w-10 mr-4 shadow-xl rounded-full" src={user?.photo} alt={user?.email} />
                                </div>
                            </div>
                        }

                        <NavLink to="/cart" className="relative  mr-5 md:mr-0">
                            <ShoppingCartIcon className="h-6" />
                            <span className="bg-yellow-500 w-5 h-5 flex items-center justify-center rounded-full text-xs absolute -right-3 bottom-3 font-bold">
                                {bookedProducts.length}
                            </span>
                        </NavLink>

                        {/*  Mobile menu  */}

                        <li className="md:hidden cursor-pointer" onClick={handleMenu}>

                            {
                                opened ?
                                    <XMarkIcon className="h-6" />
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                            }
                        </li>
                    </ul>


                </div>
            </div>
        </div>
    )
}

export default Navbar;