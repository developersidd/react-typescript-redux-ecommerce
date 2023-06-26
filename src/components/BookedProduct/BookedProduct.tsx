import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IBookedProduct } from '../../Types';
import { useAppDispatch } from '../../redux/app/hooks';
import { editCartProductQuantity, removeProductFromCart } from '../../redux/features/cart/cartSlice';
import truncateString from '../../util/truncateString';

const BookedProduct = ({ product }: { product: IBookedProduct }) => {
    const { quantity, id, title, description, image, price } = product || {};
    const [pdQuantity, setPdQuantity] = useState(quantity || 0);
    const dispatch = useAppDispatch();


    const handleProductQuantity = (method: string) => {
        //rendered = true
        if (method === 'minus') {
            if (pdQuantity >= 2) {
                setPdQuantity((prevQuantity) => prevQuantity - 1);
                dispatch(editCartProductQuantity({ id: id, quantity: 1, method: 'dec' }))
            } else {
                dispatch(removeProductFromCart(id));
            }
        } else if (method === "plus") {
            setPdQuantity((prevQuantity) => prevQuantity + 1);
            dispatch(editCartProductQuantity({ id: id, quantity: 1, method: 'inc' }))
        }
    }
    return (
        <div className='relative'>
            <div className="flex flex-col md:flex-row  gap-6  md:items-center shadow-lg bg-white p-5 md:p-8 lg:p-11 rounded-lg ">
                <div className="md:w-1/3">
                    <img className="w-44 h-44 mx-auto md:w-52 md:h-52" src={image} alt={title} />
                </div>
                <div className="space-y-2 md:w-2/3">
                    <button onClick={() => dispatch(removeProductFromCart(id))}
                        className='absolute right-4 top-7  md:p-3 hover:drop-shadow-xl shadow-red-700 cursor-pointer bg-red-600 text-white rounded-full'>
                        <TrashIcon className='h-5' />
                    </button>
                    <NavLink to={`/product/${id}`} >
                        <h3 className="text-2xl  max-w-max border-b border-opacity-0 hover:border-opacity-100  border-yellow-400 font-semibold">{title} </h3>
                    </NavLink>
                    <p> {truncateString(description)}... </p>
                    <h3 className="text-xl md:text-2xl"> <span className='font-semibold'>Price: </span> ${price} </h3>
                    <div className='flex items-center justify-between sm:justify-start sm:gap-8 pt-1'>

                        <h3 className="text-xl md:text-2xl"> <span className='font-semibold'> Quantity: </span> {quantity} </h3>
                        <div className="bg-gray-200 rounded-md shadow max-w-max px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-3">
                            <button onClick={() => handleProductQuantity("minus")} className=''> <MinusIcon className="h-6 " />
                            </button>
                            <div className="w-12 font-medium bg-gray-100 rounded-md h-8  text-center flex justify-center items-center" > {pdQuantity} </div>
                            <button disabled={quantity > 20} onClick={() => handleProductQuantity("plus")} className=""> <PlusIcon className="h-6" /> </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookedProduct
