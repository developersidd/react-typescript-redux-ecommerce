import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ErrorMessage from '../components/ui/ErrorMessage';
import Loading from '../components/ui/Loading';
import { sizes } from '../data/Variations';
import { addProduct, editQuantity } from '../redux/features/cart/cartSlice';
import { selectCart } from '../redux/features/cart/selectCart';
import { useGetProductQuery } from '../redux/features/product/productAPI';
const ProductDetails = () => {
    const { pdId } = useParams();
    const { data: product, isError, isLoading } = useGetProductQuery(pdId);
    const { title, description, price, image } = product || {};
    const [quantity, setQuantity] = useState(1);
    const { bookedProducts = [] } = useSelector(selectCart);
    const dispatch = useDispatch();

    // handle cart
    const handleCartProduct = () => {
        const clickedPd = bookedProducts.find(pd => pd.id === pdId);
        console.log("pdId:", pdId)
        console.log("clickedPd:", clickedPd)
        if (clickedPd?.id) {
            dispatch(editQuantity({ id: pdId, quantity: quantity }));
        } else {
            dispatch(addProduct({ id: pdId, quantity: quantity, image, price, title, description }));
        }
    }

    // handle quantity
    const handleQuantity = (method) => {
        setQuantity(prevQuantity => method === "plus" ? prevQuantity + 1 : quantity > 1 ? prevQuantity - 1 : 0);
    }

    // decide what to render
    let content = null;

    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <ErrorMessage message="There was an Error occurred" />
    }

    if (!isLoading && !isError && !product?.title) {
        content = <ErrorMessage message="No Product Found!" />
    }

    if (!isLoading && !isError && product?.title) {
        content = (
            <div className="p-8 md:p-16">
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                    <div className="md:w-1/2">
                        <img className="w-52 md:w-3/5 mx-auto md:mx-0 h-52 md:h-72" src={image} alt={title} />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl md:text-2xl mb-3 md:mb-6 font-semibold">{title} </h3>
                        <p className="mb-3 md:mb-7 md:w-3/4 font-medium"> {description} </p>
                        <h3 className="text-3xl mb-6">${price} </h3>

                        <div className="flex justify-between items-center md:w-2/4">
                            <div className="flex gap-2 items-center">
                                <h3 className="text-2xl">Color :</h3>
                                <div className="w-5 h-5 bg-blue-800 rounded-full"></div>
                                <div className="w-5 h-5 bg-black rounded-full"></div>
                                <div className="w-5 h-5 bg-green-800 rounded-full"></div>
                                <div className="w-5 h-5 bg-red-800 rounded-full"></div>
                            </div>
                            <div>
                                <select name="sizes" id="" className="outline-none border p-2 ">
                                    {
                                        sizes.map(pd => <option value={pd?.size}> {pd?.size} </option>)
                                    }
                                </select>

                            </div>
                        </div>
                        <div className="flex items-center py-8">

                            <div className="flex items-center gap-3">
                                <button onClick={() => handleQuantity("minus")} className=''> <MinusIcon className="h-6 " /> </button>
                                <div className="w-12 font-medium bg-gray-200 rounded-md h-8  text-center flex justify-center items-center" > {quantity} </div>
                                <button onClick={() => handleQuantity("plus")} className=""> <PlusIcon className="h-6" /> </button>
                            </div>

                            <div className="ml-14">
                                <button to="/shop"
                                    onClick={handleCartProduct}
                                    className="px-8 border-2 border-black flex items-center max-w-max py-3 gap-2 hover:bg-black hover:text-white">
                                    <span> <ShoppingCartIcon className="h-5" /> </span>
                                    <span> Add to cart </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return content;

}

export default ProductDetails;