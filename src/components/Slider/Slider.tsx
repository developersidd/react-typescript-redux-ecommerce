import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
// Import Swiper React components
import { Autoplay, EffectFlip, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import { useMediaQuery } from "react-responsive";
import 'swiper/css';
import "swiper/css/effect-flip";
import "swiper/css/navigation";
import "swiper/css/pagination";
import data from "../../data/Slider";
import "./Slider.css";

const Slider = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <div className="h-screen slider  bg-gray-200">
            <Swiper
                className="h-screen"
                pagination={{
                    dynamicBullets: true,
                }}
                spaceBetween={50}
                speed={1000}
                effect={"flip"}
                slidesPerView={1}
                allowTouchMove={false}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFlip]}
                autoplay={{
                    disableOnInteraction: false,
                    delay: 5000,
                    waitForTransition: true
                }}

            >
                {
                    data.map((item) => {
                        return (
                            <SwiperSlide
                            key={item.id}
                                className="h-full"
                            >

                                <div className="flex flex-col md:flex-row items-center justify-center md:justify-between px-7 md:gap-7">

                                    <div className="w-3/4 flex items-center justify-center h-[50vh] md:w-1/2 md:h-screen">
                                        <img className="h-3/4 w-3/4" src={item.img} alt="" />
                                    </div>

                                    <div className="w-full h-[50vh] flex max-md:items-center justify-center flex-col md:h-full md:w-1/2 text-center md:text-left">

                                        <h3
                                            className="text-xl md:text-3xl">{item.subTitle}
                                        </h3>

                                        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold my-4 md:my-6">{item.title} </h1>

                                        <NavLink to="/shop"
                                            className={`${item.id % 2 === 0 && "rounded-full"} ${item.id % 2 !== 0 && "border-dashed"}  px-5 md:px-8 border-2 border-black flex items-center max-md:mx-auto max-md:text-center max-w-max py-3 gap-2 hover:bg-black hover:text-white`}>
                                            <span> <MdOutlineShoppingCart className="h-6 w-6" /> </span>
                                            <span className="font-semibold"> {item?.btn} </span>
                                        </NavLink>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>

    )
}

export default Slider
