import { useRef } from "react";
import { BsTrash } from "react-icons/bs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import { useGetProductsQuery } from "../../redux/features/product/productAPI";
import { selectProduct } from "../../redux/features/product/productSelector";
import { removeFromWhichList } from "../../redux/features/product/productSlice";
import Loading from "../ui/Loading";

const Whichlist = () => {
    const { data: products, isError, isLoading } = useGetProductsQuery(undefined);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const dispatch = useAppDispatch();
    const { whichListProductsId } = useAppSelector(selectProduct) || {};
    const sliderRef = useRef<HTMLDivElement>(null);

    // navigate left side
    const slideLeft = () => {
        if (sliderRef.current !== null) {
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft - 500
        }
    }

    // navigate right side
    const slideRight = () => {
        if (sliderRef.current !== null) {
            sliderRef.current.scrollLeft = sliderRef.current.scrollLeft + 500
        }
    }

    // decide what to render
    let content = null;
    if (isLoading) {
        content = <Loading />
    }
    else if (whichListProductsId && whichListProductsId.length > 0) {
        content = (
            <div className='w-full  relative flex items-center'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-black text-white left-0 md:-left-12 rounded-full absolute opacity-80 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                    size={isMobile ? 30 : 40}
                />
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-black right-0 md:-right-12 text-white rounded-full absolute opacity-80 hover:opacity-100 cursor-pointer z-50 hidden group-hover:block'
                    size={isMobile ? 30 : 40}
                />
                <div
                    ref={sliderRef}
                    className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
                >
                    {
                        whichListProductsId?.length !== 0 && (whichListProductsId?.map((id) => {
                            const { image, title } = products?.find(p => p.id === id) || {};
                            return (
                                <div
                                    key={id}
                                    style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                                    className='bg-white  mr-5 w-[160px] sm:w-[200px] rounded md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
                                >
                                    <img
                                        className='w-full h-[150px] object-contain'
                                        src={image}
                                        alt={title}
                                    />
                                    <div className='absolute top-0 left-0 rounded w-full h-full transition-opacity ease-linear duration-500 bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                        <NavLink to={`product/${id}`}>
                                            <p className='whitespace-normal text-xs font-bold flex justify-center items-center h-full text-center'>
                                                {title}
                                            </p>
                                        </NavLink>
                                        <p onClick={() => dispatch(removeFromWhichList(id))} className='absolute text-gray-300 top-4 right-4'><BsTrash className=" md:h-6 md:w-6" /></p>
                                    </div>
                                </div>
                            )
                        }
                        ))
                    }
                </div>

            </div>)
    } else if (!whichListProductsId || whichListProductsId?.length === 0) {
        content = <p className="text-sm text-center md:text-xl font-bold  py-4"> No Product Found in whichList! </p>
    }


    return (
        <div className={`px-6 md:px-20 w-full ${isMobile ? "h-[350px]" : "h-[80vh]"} group`}>
            <h2 className="heading text-2xl md:text-3xl lg:text-4xl font-bold py-7 md:py-16 text-center">
                Your Whichlisted Products </h2>
            <div>
                {
                    content
                }
            </div>
        </div>
    )
}

export default Whichlist;