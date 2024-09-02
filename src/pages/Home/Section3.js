// import React, {useContext} from 'react';
// import {Container, Row, Col} from 'react-bootstrap';
// import Cards from './Cards';
// import { Link } from 'react-router-dom';
// import {CartContext} from "../../context/CartContext";
// import {MockDataContext} from "../../context/MockDataContext";



// const renderRatingIcons = (rating) => {
//   const stars = [];

//   for(let i = 0; i < 5; i++){
//     if(rating > 0.5){
//       stars.push(<i key={i} className='bi bi-star-fill'></i>);
//       rating--;
//     } else if(rating > 0 && rating < 1){
//       stars.push(<i key={"half"} className='bi bi-star-half'></i>);
//       rating--;
//     } else{
//       stars.push(<i key={`empty${i}`} className='bi bi-star'></i>);
//     }
//   }
//   return stars;
// }

// const Section3 = () => {
//   const mockData = useContext(MockDataContext);
//   const { cartItems, setCartItems } = useContext(CartContext); 
  
//   return (
//     <section className='menu_section'>
//       <Container>
//         <Row>
//           <Col lg={{span:8, offset:2}} className='text-center mb-5'>
//             <h2>Our Crazy Burger</h2>
//             <p className='para'>A high-quality hamburger patty is made entirely of ground (minced) beef and seasonings.</p>
//           </Col>
//         </Row>
//         <Row>
//           {mockData.map((cardData,index) => (
//             <Cards 
//               key={index}
//               image={cardData.image}
//               title={cardData.title}
//               rating={cardData.rating}
//               paragraph={cardData.paragraph}
//               price={cardData.price}
//               renderRatingIcons={renderRatingIcons}
//               cartItems={cartItems}
//               setCartItems={setCartItems}
//             />
//           ))}
//         </Row>
//         <Row className='pt-5'>
//           <Col sm={6} lg={5}>
//             <div className='ads_box ads_img1 mb-5 mb-md-0'>
//               <h4 className='mb-0'>GET YOUR FREE</h4>
//               <h5>CHEESE FRIES</h5>
//               <Link to='/' className='btn btn_red px-4 rounded-0'>
//                 Learn More
//               </Link>
//             </div>
//           </Col>
//           <Col sm={6} lg={7}>
//             <div className='ads_box ads_img2'>
//               <h4 className='mb-0'>GET YOUR FREE</h4>
//               <h5>CHEESE FRIES</h5>
//               <Link to='/' className='btn btn_red px-4 rounded-0'>
//                 Learn More
//               </Link>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }

// export default Section3;




import React, { useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from './Cards';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { MockDataContext } from '../../context/MockDataContext';

const renderRatingIcons = (rating) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (rating > 0.5) {
      stars.push(<i key={i} className='bi bi-star-fill'></i>);
      rating--;
    } else if (rating > 0 && rating < 1) {
      stars.push(<i key={"half"} className='bi bi-star-half'></i>);
      rating--;
    } else {
      stars.push(<i key={`empty${i}`} className='bi bi-star'></i>);
    }
  }
  return stars;
};

const Section3 = () => {
  const mockData = useContext(MockDataContext);
  const { cartItems, setCartItems } = useContext(CartContext); 
  
  return (
    <section className='menu_section'>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className='text-center mb-5'>
            <h2>Our Crazy Burger</h2>
            <p className='para'>A high-quality hamburger patty is made entirely of ground (minced) beef and seasonings.</p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData) => (
            <Cards
              key={cardData.id} // Using id as the key
              id={cardData.id}  // Pass id to Cards component
              image={cardData.image}
              title={cardData.title}
              rating={cardData.rating}
              paragraph={cardData.paragraph}
              price={cardData.price}
              renderRatingIcons={renderRatingIcons}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          ))}
        </Row>
        <Row className='pt-5'>
          <Col sm={6} lg={5}>
            <div className='ads_box ads_img1 mb-5 mb-md-0'>
              <h4 className='mb-0'>GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to='/' className='btn btn_red px-4 rounded-0'>
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className='ads_box ads_img2'>
              <h4 className='mb-0'>GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to='/' className='btn btn_red px-4 rounded-0'>
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section3;



