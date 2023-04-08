import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Announcement from './components/Announcement/Announcement';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
//import AllProvider from './context/AllProvider';
import { createContext } from "react";
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import LogOut from './pages/LogOut';
import Login from './pages/Login';
import OrderReview from './pages/OrderReview';
import ProductDetails from './pages/ProductDetails';
import ProductsPage from './pages/ProductsPage';
import SignUp from './pages/SignUp';
export const AllContext = createContext();

function App() {

  return (
    <div className="App">
      {/*<AllContext.Provider value={{ products, firebase }}>*/}
      <Router>
        <Announcement />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<Home />}></Route>
          <Route path="/shop" element={<ProductsPage />}></Route>
          <Route path="/login" element={<Login />}>

          </Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/logout" element={<LogOut />}></Route>
          <Route path="/orderReview" element={<OrderReview />}></Route>


          {/*<Route path="/*" element={<PrivateRoute />}>*/}
          <Route path="/product/:pdId" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />

          {/*</Route>*/}

          <Route path="*" element={<NotFound />}></Route>

        </Routes>
        <Footer />
      </Router>
      {/*</AllContext.Provider>*/}

    </div>
  );
}

export default App;