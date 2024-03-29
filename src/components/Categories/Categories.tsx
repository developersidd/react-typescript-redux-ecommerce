import categData from '../../data/CategoriesData'
import CategoriesItem from '../CategoriesItem/CategoriesItem'

const Categories = () => {
    return (
        <div className=" grid justify-items-stretch md:grid-cols-2 lg:grid-cols-3 py-8 md:py-12">
            {
                categData.map(item => {
                    return (
                        <CategoriesItem key={item.id} {...item} />
                    )
                })
            }
        </div>
    )
}

export default Categories;
