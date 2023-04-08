import React from 'react'
import { NavLink } from 'react-router-dom';
import useCustomContext from '../../hooks/useCustomContext';

const MobileMenu = () => {
    const { products: { clickedProduct, isOPen, setIsOpen }, firebase: { user: { displayName, photoURL, email } } } = useCustomContext();
    return (
        <div className="invisible md:visible absolute top-28 z-10 flex justify-center items-center flex-col text-center left-10 right-0  bg-white shadow-xl rounded-md p-7 w-80">
            <img className="rounded-full w-20  h-20" src={photoURL} alt={displayName} />
            <span className="mb-4 text-xl font-semibold">{displayName} </span>
            <ul className="font-semibold">
                <li>
                    <NavLink to="/"> Home</NavLink>
                </li>
                <li>
                    <NavLink to="/shop">Shop </NavLink>
                </li>
                <li>
                    <NavLink to="orderReview">Order Review </NavLink>
                </li>
                <li>
                    <NavLink to="checkout">Checkout </NavLink>
                </li>
                <li>
                    <NavLink to=""></NavLink>
                </li>
            </ul>
        </div>
    )
}

export default MobileMenu
