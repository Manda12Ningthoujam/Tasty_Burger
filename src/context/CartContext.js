// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };



// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prevItems) => {
//       const itemExists = prevItems.find(item => item.id === product.id);
//       if (itemExists) {
//         return prevItems.map(item =>
//           item.id === product.id ? { ...item, count: item.count + 1 } : item
//         );
//       }
//       return [...prevItems, { ...product, count: 1 }];
//     });
//   };

//   const removeFromCart = (productId) => {
//     setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
//   };

//   const changeQuantity = (productId, quantity) => {
//     setCartItems(prevItems =>
//       prevItems.map(item =>
//         item.id === productId ? { ...item, count: quantity } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, changeQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// import React, { createContext, useState } from 'react';

// // Create the context
// export const CartContext = createContext();

// // Create the provider component
// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const changeQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, count: parseInt(newQuantity) } : item
    ));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};


