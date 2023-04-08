import { HeartIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./product.css";
const Product = ({ product }) => {
    const { title, image, id } = product || {};
    return (

        <div style={{ backgroundColor: "#f6fbfd" }} className="item p-6 flex justify-center items-center flex-col relative rounded-md">
            <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center">
                <img className="w-36 h-36" src={image} alt="" />
            </div>
            <div className="icons flex items-center justify-center">
                <ul className="flex items-center gap-4 absolute inset-y-0  m-auto ">
                    <li className="cart">
                        <button
                            //onClick={() => handleStoredProduct(pd)}
                            className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white"> <ShoppingCartIcon className="h-5" /> </button>
                    </li>

                    <li className="search">
                        <NavLink to={`/product/${id}`}
                            className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
                            {/*<SearchIcon className="h-5" />*/}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </NavLink>
                    </li>
                    <li className="heart">

                        <NavLink to=""
                            className="link h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
                            <HeartIcon className="h-5" />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Product;