import Categories from '../components/Categories/Categories';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Slider from '../components/Slider/Slider';
import Whichlist from '../components/Whichlist/Whichlist';
import Products from '../components/products/Products';
import Contact from './Contact';

const Home = () => {

    return (
        <div>
            <main>
                <section>
                    <Slider />
                </section>

                <section>
                    <Categories />
                </section>

                <section>
                    <Products  />
                </section>

                <section>
                    <NewsLetter />
                </section>

                <section>
                    <Whichlist />
                </section>

                <section>
                    <Contact />
                </section>


            </main>
        </div>
    )
}

export default Home
