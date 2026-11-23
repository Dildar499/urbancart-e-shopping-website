import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Smartphone from "./pages/Smartphone";
import Laptop from "./pages/Laptop";
import Accessories from "./pages/Accessories";
import AudioPage from "./pages/AudioPage";
import WishList from "./pages/WishList";
import Footer from "./components/Footer";
import CreateAccount from "./pages/CreateAccountPage";
import Login from "./pages/LoginPage";
import ScrollToTop from "./components/ScrollTop";
import { useState } from "react";
import Cart from "./pages/Cart";

function App() {
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([]);

  function addToCart(product) {
    setCartItems((currentItem) => {
      const existingItem = currentItem.find((item) => item.id === product.id);
      if (existingItem) {
        return currentItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...currentItem, { ...product, quantity: 1 }];
    });
  }

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Navbar
          search={search}
          setSearch={setSearch}
          cartCount={cartItems.reduce(
            (total, item) => total + item.quantity,
            0,
          )}
        />

        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home />
                <Shop addToCart={addToCart} />
                <Contact />
              </>
            }
          ></Route>
          <Route
            path="/shop"
            element={<Shop search={search} addToCart={addToCart} />}
          ></Route>
          <Route path="/smartphone" element={<Smartphone addToCart={addToCart}/>}></Route>
          <Route path="/laptop" element={<Laptop addToCart={addToCart} />}></Route>
          <Route path="/accessories" element={<Accessories addToCart={addToCart}/>}></Route>
          <Route path="/audiopage" element={<AudioPage addToCart={addToCart} />}></Route>
          <Route path="wishlist" element={<WishList />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/createAccountPage" element={<CreateAccount />}></Route>
          <Route path="/loginpage" element={<Login />}></Route>
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
