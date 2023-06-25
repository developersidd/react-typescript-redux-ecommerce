import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { type IProduct } from '../../Types';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { selectProduct } from '../../redux/features/product/productSelector';
import { addToWhichList, removeFromWhichList } from '../../redux/features/product/productSlice';

type ProductProps = {
    product: IProduct
}

const Product = ({ product }: ProductProps) => {
    const { image, id } = product || {};
    const { whichListProductsId } = useAppSelector(selectProduct);

    const dispatch = useAppDispatch();

    // handle add to whichlist
    const handleWhichList = (id: number) => {
        if (whichListProductsId.includes(id)) {
            dispatch(removeFromWhichList(id));
        } else {
            dispatch(addToWhichList(id));
        }
    }
    return (
        <div style={{ backgroundColor: "#d6eef7" }} className="group p-6 flex justify-center items-center flex-col relative rounded-md">
            <div className='absolute rounded-md  top-0 left-0 w-full h-full bg-black/40 transition duration-500 opacity-0 group-hover:opacity-100' />
            <div className="w-60 h-60 rounded-full bg-white flex items-center justify-center">
                <img className="w-36 h-36" src={image} alt="" />
            </div>
            <div className="group-hover:opacity-100 z-50 transition duration-500 opacity-0 flex items-center justify-center">
                <ul className="flex items-center gap-4 absolute inset-y-0  m-auto ">
                    <li>
                        <NavLink to="/cart">
                            <button
                                data-tooltip-id={`cart`}
                                data-tooltip-place="top"
                                data-tooltip-content="See your Cart"
                                className="link transition hover:scale-110 h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white"> <FaShoppingCart className="w-5 h-5" />
                            </button>
                            <Tooltip
                                id='cart'
                            />
                        </NavLink>
                    </li>

                    <li className="search">
                        <NavLink
                            data-tooltip-id={`details`}
                            data-tooltip-place="top"
                            data-tooltip-content="Show Details" to={`/product/${id}`}
                            className="transition hover:scale-110 h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </NavLink>
                        <Tooltip
                            id='details'
                        />
                    </li>
                    <li className="heart">

                        <button
                            data-tooltip-id="whichlist"
                            data-tooltip-content={whichListProductsId.includes(id) ? "Remove from Whichlist" : "Add to Whichlist"}
                            data-tooltip-place="top"
                            onClick={() => handleWhichList(id)}
                            className="transition hover:scale-110 h-10 w-10 shadow-xl  rounded-full flex items-center justify-center bg-white">
                            {
                                whichListProductsId.includes(id) ? <FaHeart className="w-5 h-5" /> : <FaRegHeart className="w-5 h-5" />
                            }
                        </button>
                        <Tooltip
                            id='whichlist'
                        />
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default Product;