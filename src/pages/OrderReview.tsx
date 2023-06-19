import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { selectCart } from '../redux/features/cart/cartSelector';
import { clearCartProducts } from '../redux/features/cart/cartSlice';
import { selectProduct } from '../redux/features/product/productSelector';
import Cart from './../components/Cart/Cart';
import BookedProduct from '../components/BookedProduct/BookedProduct';

const OrderReview = () => {

    const { bookedProducts } = useAppSelector(selectCart) || {};
    const { whichListProductsId } = useAppSelector(selectProduct) || {};

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleComplete = () => {
        dispatch(clearCartProducts());
        Swal.fire({
            icon: 'success',
            title: 'EXTRAORDINARY',
            text: 'Your Ordered has been successfull completed!',
        });
        navigate("/")
    }


    return (
        <div className="my-10 mx-4 lg:m-16">
            <div className="mb-8 md:mb-16 gap-7 flex flex-col  md:flex-row items-center md:justify-between">
                <button>
                    <NavLink to="/shop"
                        className="px-5 border-2 font-semibold  text-base md:text-lg  border-black py-3">
                        <span> Continue shopping </span>
                    </NavLink>
                </button>
                <div className="font-semibold md:text-lg underline">
                    <span className="mr-3">Shopping Bag({bookedProducts?.length}) </span>
                    <span>Whichlist({whichListProductsId?.length}) </span>
                </div>
                <button>
                    <NavLink to="/checkout"
                        onClick={handleComplete}
                        className="px-6 border-2 font-semibold  md:text-lg  border-black  py-3 bg-black text-white">
                        <span> Proceed to checkout </span>
                    </NavLink>
                </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:items-start">
                <div className="lg:w-2/3 order-2 lg:order-1">

                    {
                        bookedProducts?.length === 0 ? <p className='text-center font-medium text-2xl'>No Product in cart! </p> : (
                            bookedProducts?.map(pd => {
                                return <BookedProduct key={pd.id} product={pd} />
                            })
                        )
                    }
                </div>
                <div className="lg:w-1/3 order-1 lg:order-2">
                    <Cart handleComplete={handleComplete} />
                </div>
            </div>

        </div>
    )
}

export default OrderReview;