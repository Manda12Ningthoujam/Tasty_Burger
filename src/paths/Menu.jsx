import React, { useContext } from 'react';
import Section3 from '../pages/Home/Section3';
import { CartContext } from '../context/CartContext';
import Header from '../components/Layouts/Header';

const Menu = () => {
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <>
      <Header cartItems ={cartItems}/>
      <Section3 cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default Menu;

