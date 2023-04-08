import React from 'react';
import   './CategoriesItem.css';
import { NavLink } from 'react-router-dom';

const CategoriesItem = ({ name, img }) => {
    return (
        <div className="categ-item h-96  flex flex-col justify-center items-center  " style={{ backgroundImage: `url(${img})` }}>
            <h3 className="mb-3 text-2xl text-white font-semibold">{name} </h3>
            <NavLink to="/shop"
                className="px-8 border-2 border-white  py-3  text-white  hover:bg-black hover:border-black  hover:text-white">
                 Shop Now 
            </NavLink>
        </div>
    )
}

export default CategoriesItem;