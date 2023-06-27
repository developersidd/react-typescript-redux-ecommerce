import { MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ErrorMessage from '../components/ui/ErrorMessage';
import Loading from '../components/ui/Loading';
import { sizes } from '../data/Variations';
import { useAppDispatch } from '../redux/app/hooks';
import { selectCart } from '../redux/features/cart/cartSelector';
import { editProductQuantity } from '../redux/features/cart/cartSlice';
import { useGetProductQuery } from '../redux/features/product/productAPI';
const ProductDetails = () => {
    const { pdId } = useParams();
    const parsedPdID = Number(pdId);
    const { data: product, isError, isLoading } = useGetProductQuery(parsedPdID);
    const { title, description, price, image } = product || {};
    const [color, setColor] = useState("black");
    const { bookedProducts = [] } = useSelector(selectCart);
    const dispatch = useAppDispatch();
    const totalProductQuantity = bookedProducts.find(p => p.id === parsedPdID)?.quantity;
    const [quantity, setQuantity] = useState(totalProductQuantity || 1);

    // handle cart
    const handleCartProduct = () => {
        const cartProduct = bookedProducts.find(p => p.id === parsedPdID);
        if (cartProduct?.id) {
            dispatch(editProductQuantity({ id: parsedPdID, quantity: quantity }));
        } else {
            dispatch(editProductQuantity({ id: parsedPdID, quantity: quantity, image, price, title, description, color }));
        }
    }

    // handle quantity
    const handleQuantity = (method: string) => {
        setQuantity(prevQuantity => method === "plus" ? prevQuantity + 1 : quantity >= 2 ? prevQuantity - 1 : 1);
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
            <div className="p-5 sm:p-7 md:p-9 lg:p-16">
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                    <div className="md:w-1/2">
                        <img className="w-full p-6 sm:p-8 md:10 lg:p-12 lg:w-[500px] lg:h-[650px] object-contain" src={image} alt={title} />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-xl md:text-2xl mb-3 md:mb-6 font-semibold">{title} </h3>
                        <p className="mb-3 md:mb-7  font-medium"> {description} </p>
                        <h3 className="text-2xl md:text-3xl mb-6">${price} </h3>

                        <div className="flex justify-between items-center lg:w-4/5 2xl:w-3/5">
                            <div className="flex gap-3 items-end">
                                <h3 className="text-xl md:text-2xl">Color :</h3>
                                <div onClick={() => setColor("black")} className={`w-5 h-5 ${color === "black" && `ring-4 ring-yellow-400`} bg-black rounded-full`}></div>
                                <div onClick={() => setColor("cyan")} className={`w-5 h-5 ${color === "cyan" && `ring-4 ring-yellow-400`} bg-cyan-600 rounded-full`}></div>
                                <div onClick={() => setColor("green")} className={`w-5 h-5 ${color === "green" && `ring-4 ring-yellow-400`} bg-green-600 rounded-full`}></div>
                                <div onClick={() => setColor("orange")} className={`w-5 h-5 ${color === "orange" && `ring-4 ring-yellow-400`} bg-orange-600 rounded-full`}></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl md:text-2xl mr-2">Size: </h3>
                                <select name="sizes" id="" className="outline-none border p-2 ">
                                    {
                                        sizes.map(pd => <option value={pd?.size}> {pd?.size} </option>)
                                    }
                                </select>

                            </div>
                        </div>
                        <div className="flex items-center pt-5 md:pt-7 lg:w-4/5 2xl:w-3/5 justify-between">

                            <div className="bg-gray-200 px-4 lg:px-6 2xl:px-8 py-3 shadow rounded-md flex items-center gap-3">
                                <button disabled={quantity === 1} onClick={() => handleQuantity("minus")} className=''> <MinusIcon className="h-6 " /> </button>
                                <div className="w-12 font-medium bg-gray-100 rounded-md h-8  text-center flex justify-center items-center" > {quantity} </div>
                                <button disabled={quantity >= 20} onClick={() => handleQuantity("plus")} className=""> <PlusIcon className="h-6" /> </button>
                            </div>

                            <div className="">
                                <button type='button'
                                    onClick={handleCartProduct}
                                    className="px-4 md:px-6 lg:px-7 border-2 border-black flex items-center max-w-max py-3 gap-2 hover:bg-black hover:text-white">
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