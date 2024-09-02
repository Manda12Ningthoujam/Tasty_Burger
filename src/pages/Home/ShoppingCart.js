import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import "../../styles/ShoppingCart.css";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { cartItems, changeQuantity, setCartItems } = useContext(CartContext);

  // Function to remove a product from the cart
  const handleProductRemove = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Calculate the total amount
  const totalAmount = cartItems.reduce((acc, product) => {
    return acc + (product.price * product.count);
  }, 0).toFixed(2);

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h2>Shopping Cart</h2>
      </div>
      <div className='cart-products'>
        {cartItems.length === 0 && 
        (<span className='empty-text'>Your cart is currently empty</span>
        )}
        {cartItems.map((product) => (
          
          <div 
            className='cart-product'
            key={product.id}>
              <img
                src={product.image}
                alt={product.title}
              />
              <div className='product-info'>
                <h3>{product.title}</h3>
                <span className='product-price'>${(product.price * product.count).toFixed(2)}</span>
              </div>
              <div className='product-quantity'>
              <select
                className='count'
                value={product.count}
                onChange={(event) => {
                  changeQuantity(product.id, event.target.value);
                }}
              >
                {[
                  ...Array(10).keys()].map(number => {
                    const num = number + 1;
                    return <option key={num} value={num}>{num}</option>
                  }
                  )
                }
              </select>
              <button className='remove-btn' onClick={() => {
                handleProductRemove(product.id);
              }}>
                <RiDeleteBin6Line size={20}/>
              </button>
              </div>
          </div>
         
        ))}
        {cartItems.length > 0 && (
          <>
            {/* Total Amount Section */}
            <div className='cart-total'>
              <h3>Total Amount: ${totalAmount}</h3>
            </div>

            {/* Proceed to Checkout Button */}
            <Link to='/checkout' className='btn btn_red'>
              Proceed to Checkout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ShoppingCart;


