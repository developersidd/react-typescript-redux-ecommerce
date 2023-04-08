import { useDispatch, useSelector } from 'react-redux';
import Product from '../../components/Product/Product';
import ErrorMessage from '../../components/ui/ErrorMessage';
import { selectFilter } from '../../redux/features/filter/filterSelector';
import { filterByCategory, sortByPrice } from '../../redux/features/filter/filterSlice';
import { useGetProductsQuery } from '../../redux/features/product/productAPI';
import Loading from '../ui/Loading';

const Products = () => {

    const { data: products, isError, isLoading } = useGetProductsQuery();
    const { category, sortBy, search } = useSelector(selectFilter) || {};
    const dispatch = useDispatch();
    const handleFilterProducts = (pd) => {
        if (category !== "Select Category") {
            return pd.category === category
        } else {
            return pd;
        }
    }

    const handleSearchedProducts = (pd) => {
        if (search !== "") {
            return pd.title?.toLowerCase()?.includes(search?.toLowerCase())
        }
        return pd;
    }

    const handleSortProducts = (a, b) => {
        if (sortBy === "price(asec)") {
            return a.price - b.price;
        } else if (category === "price(dsec)") {
            return b.price - a.price;
        }
        else {
            return products;
        }
    }

    //get unique category
    const categoryList = [...new Set(products?.map(pd => pd.category))]
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

    if (!isLoading && !isError && products?.length > 0) {
        content = <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {products?.filter(handleSearchedProducts)?.length === 0 ? <p className='font-medium text-center'> No Product Found on: {search}</p> : products.filter(handleFilterProducts).filter(handleSearchedProducts).sort(handleSortProducts).map(pd => <Product product={pd} />)}
            </div>
        </>
    }

    return (
        <div className="px-6 md:px-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-7 md:pt-16 text-center">Our Featured Products </h2>
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
            <dir>
                {content}
            </dir>

        </div>
    )
}

export default Products
