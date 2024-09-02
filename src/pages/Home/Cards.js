// import React, {useContext} from 'react';
// import {Card, Col } from 'react-bootstrap';
// import { CartContext } from '../../context/CartContext';


// const Cards = ({image,title,paragraph,price,rating,renderRatingIcons}) => {

//   const { cartItems, setCartItems } = useContext(CartContext);

//   const handleAddToCart = () => {
//         const itemExists = cartItems.find(item => item.title === title);
    
//         if (!itemExists) {
//           setCartItems([...cartItems, { title, price, image }]);
//         }
       
//       };    

//   return (
   
//     <Col sm={6} lg={3} xl={3} className='mb-4'>
//       <Card className='overflow-hidden'>
//         <div className='overflow-hidden'>
//           <Card.Img variant="top" src={image} />
//         </div>
      
//       <Card.Body>
//         <div className='d-flex align-items-center justify-content-between'>
//           <div className='item_rating'>{renderRatingIcons(rating)}</div>
//           <div className='wishlist'>
//             <i class="bi bi-heart"></i>
//           </div>
//         </div>
//         <Card.Title>{title}</Card.Title>
//         <Card.Text>
//           {paragraph}
//         </Card.Text>

//         <div className='d-flex align-items-center justify-content-between'>
//           <div className='menu_price'>
//             <h5 className='mb-0'>${price}</h5>
//           </div>
//           <div className='add_to_card'>
//             <button onClick={handleAddToCart} >
//                 <i className="bi bi-bag me-2"></i>
//                 Add to Cart
//               </button>
            
//           </div>
//         </div>
//       </Card.Body>
//     </Card>
//     </Col>

//   )
// }

// export default Cards;



// import React, { useContext } from 'react';
// import { Card, Col } from 'react-bootstrap';
// import { CartContext } from '../../context/CartContext';

// const Cards = ({ image, title, paragraph, price, rating, renderRatingIcons, id }) => {
//   const { addToCart } = useContext(CartContext);

//   const handleAddToCart = () => {
//     addToCart({ id, title, price, image });
//   };

//   return (
//     <Col sm={6} lg={3} xl={3} className='mb-4'>
//       <Card className='overflow-hidden'>
//         <div className='overflow-hidden'>
//           <Card.Img variant="top" src={image} />
//         </div>
//         <Card.Body>
//           <div className='d-flex align-items-center justify-content-between'>
//             <div className='item_rating'>{renderRatingIcons(rating)}</div>
//             <div className='wishlist'>
//               <i className="bi bi-heart"></i>
//             </div>
//           </div>
//           <Card.Title>{title}</Card.Title>
//           <Card.Text>{paragraph}</Card.Text>
//           <div className='d-flex align-items-center justify-content-between'>
//             <div className='menu_price'>
//               <h5 className='mb-0'>${price}</h5>
//             </div>
//             <div className='add_to_card'>
//               <button onClick={handleAddToCart}>
//                 <i className="bi bi-bag me-2"></i>
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         </Card.Body>
//       </Card>
//     </Col>
//   );
// };

// export default Cards;


import React, { useContext } from 'react';
import { Card, Col } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const Cards = ({ id, image, title, paragraph, price, rating, renderRatingIcons }) => {
  const { cartItems, setCartItems } = useContext(CartContext);

  const handleAddToCart = () => {
    const itemExists = cartItems.find(item => item.id === id);
    
    if (itemExists) {
      // If the item is already in the cart, increment the quantity
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      // If the item is not in the cart, add it as a new entry with a count of 1
      setCartItems([...cartItems, { id, title, price, image, count: 1 }]);
    }
  };

  return (
    <Col sm={6} lg={3} xl={3} className='mb-4'>
      <Card className='overflow-hidden'>
        <div className='overflow-hidden'>
          <Card.Img variant="top" src={image} />
        </div>
      
      <Card.Body>
        <div className='d-flex align-items-center justify-content-between'>
          <div className='item_rating'>{renderRatingIcons(rating)}</div>
          <div className='wishlist'>
            <i className="bi bi-heart"></i>
          </div>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{paragraph}</Card.Text>

        <div className='d-flex align-items-center justify-content-between'>
          <div className='menu_price'>
            <h5 className='mb-0'>${price}</h5>
          </div>
          <div className='add_to_card'>
            <button onClick={handleAddToCart}>
              <i className="bi bi-bag me-2"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </Card.Body>
    </Card>
    </Col>
  );
};

export default Cards;




