import { NavLink } from 'react-router-dom';
import './CategoriesItem.css';

const CategoriesItem = ({ name, img }: { name: string, img: string }) => {
    return (
        <div className="relative z-20 h-96 bg-no-repeat flex flex-col justify-center items-center bg-cover lg:bg-[length:640px_640px]" style={{ backgroundImage: `url(${img})` }}>
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]' />
            <h3 className="mb-3 text-2xl text-white font-semibold">{name} </h3>
            <NavLink to="/shop"
                className="px-8 border-2 border-white  py-3  text-white  hover:bg-black hover:border-black  hover:text-white">
                Shop Now
            </NavLink>
        </div>
    )
}

export default CategoriesItem;
