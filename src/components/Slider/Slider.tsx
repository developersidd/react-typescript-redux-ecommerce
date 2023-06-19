import { ShoppingCartIcon, } from '@heroicons/react/24/outline';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { NavLink } from 'react-router-dom';
import data from "../../data/Slider";
import "./Slider.css";
const Slider = () => {
    return (
        <div className="h-screen bg-gray-200">
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} showThumbs={true} transitionTime={1200}>
                {
                    data.map((item) => {
                        return (
                            <div key={item.id} className="flex flex-col md:flex-row items-center px-7 md:gap-7">

                                <div className="w-3/4 h-72 md:w-1/2 md:h-screen"
                                    style={{
                                        backgroundImage: `url(${item.img})`,
                                        backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "60%"
                                    }}>
                                </div>

                                <div className="w-full md:w-1/2 text-left">

                                    <h3
                                        className="text-xl md:text-3xl">{item.subTitle}
                                    </h3>

                                    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold my-3 md:my-6">{item.title} </h1>

                                    <NavLink to="/shop"
                                        className={`${(item.id === 2 || item.id === 4) && "rounded-full"} ${(item.id === 1 || item.id === 3) && "border-dashed"}  px-5 md:px-8 border-2 border-black flex items-center max-w-max py-3 gap-2 hover:bg-black hover:text-white`}>
                                        <span> <ShoppingCartIcon className="h-5" /> </span>
                                        <span className="font-semibold"> {item?.btn} </span>
                                    </NavLink>
                                </div>
                            </div>

                        )
                    })
                }

            </Carousel>
        </div>
    )
}

export default Slider
