import { NavLink } from 'react-router-dom';
//import useCustomContext from '../hooks/useCustomContext';
import Cart from './../components/Cart/Cart';

const OrderReview = () => {

    //const { products: { clickedProduct } } = useCustomContext();

    return (
        <div className="my-10 mx-4 lg:m-16">
            <div className="mb-8 md:mb-16 gap-7 flex flex-col  md:flex-row items-start md:items-center md:justify-between">
                <button>
                    <NavLink to="/shop"
                        className="px-5 border-2 font-semibold  text-base md:text-lg  border-black py-3">
                        <span> Continue shopping </span>
                    </NavLink>
                </button>
                {/* <div className="font-semibold md:text-lg underline">
                    <span className="mr-3">Shopping Bag({clickedProduct.length}) </span>
                    <span>Whichlist(0) </span>
                </div>*/}
                <button>
                    <NavLink to="/checkout"
                        className="px-6 border-2 font-semibold  md:text-lg  border-black  py-3 bg-black text-white">
                        <span> Proceed to checkout </span>
                    </NavLink>
                </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:items-start">
                {/* <div className="lg:w-2/3 order-2 lg:order-1">

                    {
                        clickedProduct.map(pd => {
                            return (
                                <div className="flex flex-col md:flex-row  gap-6  md:items-center shadow-lg bg-white p-10 rounded-lg mb-10">
                                    <div className="md:w-1/3">
                                        <img className="w-44 h-44 mx-auto md:w-52 md:h-52" src={pd?.image} alt={pd?.title} />
                                    </div>
                                    <div className="md:w-2/3">
                                        <h3 className="text-2xl mb-6 font-semibold">{pd?.title} </h3>
                                        <p className="mb-4 font-medium"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis excepturi magnam modi quas distinctio vitae voluptate animi sit reprehenderit eius sint numquam ex itaque minus, ducimus quis amet necessitatibus corrupti.</p>
                                        <h3 className="text-3xl">${pd?.price} </h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>*/}
                <div className="lg:w-1/3 order-1 lg:order-2">
                    <Cart />
                </div>
            </div>

        </div>
    )
}

export default OrderReview;