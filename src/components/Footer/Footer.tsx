import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="p-5 md:p-10 grid md:grid-cols-2 lg:grid-cols-3 gap-9 max-md:text-center max-md:place-items-center">
                <div >
                    <h2 className="text-2xl font-bold mb-3">ABShop </h2>
                    <p> AB's Shop is a vibrant and trendy e-commerce destination that caters to the modern shopper seeking convenience, quality, and style. With a name that exudes personality and individuality, AB's Shop offers an extensive range of products that will satisfy every customer's needs and desires.</p>
                    <ul className="flex items-center max-md:justify-center  gap-4 pt-6">
                        <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center"><FaFacebookF /> </li>
                        <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center"> <FaInstagram /> </li>
                        <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center"><FaLinkedinIn />  </li>
                        <li className="w-10 h-10 bg-black text-white rounded  flex items-center justify-center"><FaTwitter />  </li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-3">Usefull Links</h2>
                    <div className="flex font-medium">
                        <ul className="mr-7 md:mr-20">
                            <li>
                                <NavLink to="/"> Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">About us </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop">Man Fashion </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop"> Accessories</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart"> Cart</NavLink>
                            </li>
                            <li>
                                <NavLink to="/"> Shipping</NavLink>
                            </li>
                        </ul>

                        <ul>
                            <li>
                                <NavLink to="/shop"> shop</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Whichlist </NavLink>
                            </li>
                            <li>
                                <NavLink to="/shop">Women Fashion </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart"> Order Review </NavLink>
                            </li>
                            <li>
                                <NavLink to="/"> privacy & security </NavLink>
                            </li>
                            <li>
                                <NavLink to="/"> policy & payment </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-2xl font-bold mb-3">contact</h2>
                    <ul className="flex flex-col max-md:items-center">
                        <li className="flex gap-3 mb-3"> <FaPhoneAlt /> <span>  +0154517815</span>  </li>
                        <li className="flex gap-3 mb-3">  <FaLocationArrow /> <span> Road 105 new york city, usa</span> </li>
                        <li className="flex gap-3 mb-3"><FaEnvelope /> contact@abshop1.com   </li>
                        <li> <img className="w-56" src="https://i1.wp.com/caffeinetreat.com/wp-content/uploads/2018/10/Paypa-e1541212828289.png?ssl=1" alt="payment-getway" />  </li>
                    </ul>
                </div>
            </div>
            <div
                className="bg-gray-100 text-center p-6">
                Copyright © 2021  alright reserved  AB-shop.com.  designed by AB.Siddik
            </div>
        </div>
    )
}

export default Footer
