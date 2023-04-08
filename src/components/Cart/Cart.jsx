import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { selectCart } from '../../redux/features/cart/cartSelector';
import { clearCartProducts } from '../../redux/features/cart/cartSlice';

const Cart = ({handleComplete}) => {
    const { bookedProducts = [] } = useSelector(selectCart);
   

    const totalPrice = bookedProducts[0]?.price ? bookedProducts.reduce((previous, pd) => previous + (pd.price * pd.quantity), 0).toFixed(2) : 0;

    const taxes = totalPrice >= 1 ? (totalPrice * .2).toFixed(2) : 0;

    let shipping = totalPrice >= 1 ? 50 : 0;

    const subTotalPrice = parseFloat(totalPrice) + parseFloat(taxes) + parseFloat(shipping);

    const subTotal = totalPrice >= 1 ? subTotalPrice.toFixed(2) : 0;

    if (totalPrice >= 1000) {
        shipping += 50;
    }

    
    return (
        <div className=" shadow-lg p-7 rounded-xl">
            <h3 className="text-center text-2xl font-bold mb-6">ORDER SUMMARY </h3>
            <div className="flex justify-between font-semibold text-xl mb-3  border-b pb-2">
                <h3>Subtotal: </h3>
                <h3> ${totalPrice}   </h3>
            </div>

            <div className="flex justify-between font-semibold text-xl mb-3  border-b pb-2">
                <h3>Taxes: </h3>
                <h3>${taxes}  </h3>
            </div>

            <div className="flex justify-between font-semibold text-xl mb-3  border-b pb-2">
                <h3>Shipping Cost:</h3>
                <h3> ${shipping}   </h3>
            </div>

            <div className="flex justify-between font-semibold text-xl">
                <h3>Total: </h3>
                <h3> ${subTotal}   </h3>
            </div>
            <NavLink onClick={handleComplete} to="/checkout"
                className="mt-6 px-6 border-2 border-black flex items-center max-w-max py-2 gap-2 text-lg font-semibold">
                <span> Complate </span>
            </NavLink>
        </div>

    )
}

export default Cart;