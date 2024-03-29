import { NavLink, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Swal from 'sweetalert2';
import BookedProduct from '../components/BookedProduct/BookedProduct';
import { useAppDispatch, useAppSelector } from '../redux/app/hooks';
import { selectCart } from '../redux/features/cart/cartSelector';
import { clearCartProducts } from '../redux/features/cart/cartSlice';
import { selectProduct } from '../redux/features/product/productSelector';
import Cart from './../components/Cart/Cart';
import SetPageTitle from '../ui/SetPageTitle';

const OrderReview = () => {

    const { bookedProducts } = useAppSelector(selectCart) || {};
    const { whichListProductsId } = useAppSelector(selectProduct) || {};

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLocation = () => {
        setTimeout(() => {
            //window.location.pathname = " "
        }, 2500);
    }

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
                    <SetPageTitle title="Cart" />

            <div className="mb-8 md:mb-16 gap-7 flex flex-col  md:flex-row items-center md:justify-between">
                <button>
                    <NavLink to="/shop"
                        className="px-5 border-2 font-semibold  text-base md:text-lg  border-black py-3">
                        <span> Continue shopping </span>
                    </NavLink>
                </button>
                <div onClick={handleLocation} className="font-semibold md:text-lg underline">
                    <span className="mr-3">Shopping Bag({bookedProducts?.length}) </span>
                    <HashLink smooth to="/home#whichlist">
                        <span>Whichlist({whichListProductsId?.length}) </span>
                    </HashLink>
                </div>
                <button onClick={handleComplete} disabled={bookedProducts?.length === 0} className="disabled:cursor-not-allowed px-6 border-2 font-semibold  md:text-lg  border-black  py-3 bg-black text-white">
                    <span> Proceed to checkout </span>
                </button>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:items-start">
                <div className="lg:w-2/3 order-2 lg:order-1">

                    {
                        bookedProducts?.length === 0 ? <p className='py-12 text-center font-bold text-lg sm:text-xl md:text-2xl'>No Product in cart! </p> : (
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