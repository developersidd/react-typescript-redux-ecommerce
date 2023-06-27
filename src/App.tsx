import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Announcement from './components/Announcement/Announcement';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from "./components/Private/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import Loading from "./components/ui/Loading";
import useFirebase from "./hooks/useFirebase";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import LogOut from './pages/LogOut';
import Login from './pages/Login';
import OrderReview from './pages/OrderReview';
import ProductDetails from './pages/ProductDetails';
import ProductsPage from './pages/ProductsPage';
import SignUp from './pages/SignUp';
import ScrollToTop from "./ui/ScrollToTop";

function App(): JSX.Element {
  const { userObserver } = useFirebase();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    setIsChecking(true);
    userObserver();
    setTimeout(() => {
      setIsChecking(false);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <Router>
        <Announcement />
        <ScrollToTop />
        <Navbar />
        {
          isChecking ? (<Loading />) : (
            <Routes>

              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              {/*  Public Route starts */}
              <Route path="/*" element={<PublicRoute />}>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<SignUp />} />
              </Route>
              {/*  Public Route end */}


              {/*  Private Route starts */}
              <Route path="/*" element={<PrivateRoute />}>
                <Route path="product/:pdId" element={<ProductDetails />} />
                <Route path="cart" element={<OrderReview />} />
              </Route>
              {/*  Private Route ends */}

              <Route path="/about" element={<Home />} />
              <Route path="/shop" element={<ProductsPage />} />
              <Route path="/logout" element={<LogOut />} />

              <Route path="*" element={<NotFound />} />

            </Routes>
          )
        }

        <Footer />
      </Router>

    </div>
  );
}

export default App;

function usState(arg0: boolean) {
  throw new Error("Function not implemented.");
}
