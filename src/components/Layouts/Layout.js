import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { CartContext } from "../../context/CartContext";

function Layout({ children }) {
  // Access cartItems from CartContext
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <Header cartItems={cartItems} />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;



