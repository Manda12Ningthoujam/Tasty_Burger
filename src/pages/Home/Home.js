import React from 'react';
import Layout from '../../components/Layouts/Layout';
import Section1 from './Section1';
import "../../styles/HomeStyles.css";
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';  

const Home = () => {
  const { cartItems, setCartItems } = useContext(CartContext);  // Access cartItems and setCartItems from context

  return (
    <Layout>
      <Section1 />
      <Section2 />
      <Section3 cartItems={cartItems} setCartItems={setCartItems} />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </Layout>
  );
};

export default Home;


