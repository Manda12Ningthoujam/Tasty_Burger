import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import LoginSignUp from "./components/Layouts/LoginSignUp";
import About from "./paths/About";
import Menu from "./paths/Menu";
import Shop from "./paths/Shop";
import Contact from "./paths/Contact";
import Blog from "./paths/Blog";
import ShoppingCart from "./pages/Home/ShoppingCart";
import Checkout from "./pages/Home/Checkout";
import { CartProvider } from "../src/context/CartContext";
import { MockDataProvider } from "./context/MockDataContext";




function App() {
  return (
    <MockDataProvider>
    <CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/signin" element={<LoginSignUp />} />
        
      </Routes>
      </Router>

    </CartProvider>
    </MockDataProvider>
  );
}

export default App;
