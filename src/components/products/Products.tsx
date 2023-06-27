import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { type IProduct } from '../../Types';
import Product from '../../components/Product/Product';
import ErrorMessage from '../../components/ui/ErrorMessage';
import { useAppDispatch } from '../../redux/app/hooks';
import { selectFilter } from '../../redux/features/filter/filterSelector';
import { filterByCategory, sortByPrice } from '../../redux/features/filter/filterSlice';
import { useGetProductsQuery } from '../../redux/features/product/productAPI';
import Loading from '../ui/Loading';

type ProductProps = {
    setPdRef: (element: HTMLDivElement | null) => void
}

const Products = ({ setPdRef }: ProductProps) => {
    const location = useLocation();
    console.log("setPdRef:", setPdRef)
    console.log("location:", location)

    const productsRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (location.pathname === "/") {
            setPdRef(productsRef.current)
        }
    }, []);

    const { data: products, isError, isLoading } = useGetProductsQuery(undefined);
    const { category, sortBy, search } = useSelector(selectFilter) || {};

    const dispatch = useAppDispatch();

    const handleFilterProducts = (pd: IProduct): Boolean | IProduct => {
        if (category !== "Select Category") {
            return pd.category === category
        } else {
            return pd;
        }
    }

    const handleSearchedProducts = (pd: IProduct): Boolean | IProduct => {
        if (search !== "") {
            return pd.title?.toLowerCase()?.includes(search?.toLowerCase())
        }
        return pd;
    }

    const handleSortProducts = (a: any, b: any): any => {
        //if (products !== undefined) {
        if (sortBy === "price(asec)") {
            return a.price - b.price;
        } else if (category === "price(dsec)") {
            return b.price - a.price;
        }
        /* else {
             return products;
         }*/
        //}
    }

    //get unique category
    const categoryList = [...new Set(products?.map(pd => pd.category))];

    // decide what to render
    let content = null;

    if (isLoading) {
        content = <Loading />
    }

    if (!isLoading && isError) {
        content = <ErrorMessage message="There was an Error occurred" />
    }

    if (!isLoading && !isError && products?.length === 0) {
        content = <ErrorMessage message="No Product Found!" />
    }

    if (!isLoading && !isError && products !== undefined && products?.length > 0) {
        content = <>
            {products?.filter(handleSearchedProducts)?.length === 0 ?
                <div className='h-screen flex items-center justify-center'>
                    <p className='font-medium md:text-xl'> No Product Found on: <span className='font-bold'>  {search} </span></p>
                </div>
                :
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {
                        products.filter(handleFilterProducts).filter(handleSearchedProducts).sort(handleSortProducts).map(pd => <Product key={pd.id} product={pd} />
                        )
                    }
                </div>
            }
        </>
    }

    return (
        <div ref={productsRef} className="px-6 md:px-20">
            <h2 className="heading text-2xl md:text-3xl lg:text-4xl font-bold pt-7 md:pt-16 text-center">Our Featured Products </h2>
            <div className="my-5 md:my-10 flex items-center justify-between">
                <div>

                    <span className="text-xl md:text-2xl font-semibold">Filter Products : </span>
                    <select onChange={e => dispatch(filterByCategory(e.target.value))} className="outline-none border p-2 mr-4 ">
                        <option value="Select Category"> Select Category </option>
                        {
                            categoryList?.map((category, ind) =>
                                <option key={ind}>
                                    {category} </option>)
                        }
                    </select>

                </div>
                <div>
                    <span className="text-xl md:text-2xl font-semibold">Sort Products : </span>
                    <select onChange={e => dispatch(sortByPrice(e.target.value))} className="outline-none border p-2 ">
                        <option value="Regular"> Regular </option>
                        <option value="price(asec)">price(asec) </option>
                        <option value="price(dsec)"> price(dsec) </option>
                    </select>
                </div>
            </div>
            <div>
                {content}
            </div>

        </div>
    )
}

export default Products
