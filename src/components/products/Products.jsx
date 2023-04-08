import Product from '../../components/Product/Product';
import ErrorMessage from '../../components/ui/ErrorMessage';
import { colors, sizes } from '../../data/Variations';
import { useGetProductsQuery } from '../../redux/features/product/productAPI';
import Loading from '../ui/Loading';

const Products = () => {

    const { data: products, isError, isLoading } = useGetProductsQuery();

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
        content = products.map(pd => <Product product={pd} />)

    }

    return (
        <div className="px-6 md:px-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pt-7 md:pt-16 text-center">Our Featured Products </h2>
            <div className="my-5 md:my-10 flex items-center justify-between">
                <div>

                    <span className="text-xl md:text-2xl font-semibold">Filter Products : </span>
                    <select name="" id="" className="outline-none border p-2 mr-4 ">
                        {
                            colors.map(pd => <option value={pd.color}> {pd.color} </option>)
                        }
                    </select>

                    <select name="" id="" className="outline-none border p-2 ">
                        {
                            sizes.map(pd => <option value={pd.size}> {pd.size} </option>)
                        }
                    </select>

                </div>
                <div>
                    <span className="text-xl md:text-2xl font-semibold">Sort Products : </span>
                    <select name="" id="" className="outline-none border p-2 ">
                        <option value="regular"> Regular </option>
                        <option value="price(asec)">price(asec) </option>
                        <option value="price(dsec)"> price(dsec) </option>
                    </select>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {content}
            </div>
        </div>
    )
}

export default Products
