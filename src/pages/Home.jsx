import React from 'react';
import Categories from '../components/Categories/Categories';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Slider from '../components/Slider/Slider';
import Products from '../components/products/Products';

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
                    <Products />
                </section>

                <section>
                    <NewsLetter />
                </section>
            </main>
        </div>
    )
}

export default Home
