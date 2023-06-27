import { useState } from 'react';
import Categories from '../components/Categories/Categories';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Slider from '../components/Slider/Slider';
import Whichlist from '../components/Whichlist/Whichlist';
import Products from '../components/products/Products';
import Contact from './Contact';

const Home = () => {
const [pdRef, setPdRef] = useState<HTMLDivElement | null>(null)
    const scrollToSection = (elementRef: HTMLDivElement | null) => {
        if(elementRef){
            window.scrollTo({
                top: elementRef.offsetTop,
                behavior : "smooth"
            })
        }
    }

    return (
        <div>
            <main>
                <section>
                    <Slider scrollToProducts={() => scrollToSection(pdRef)}  />
                </section>

                <section>
                    <Categories />
                </section>

                <section>
                    <Products setPdRef={setPdRef} />
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
