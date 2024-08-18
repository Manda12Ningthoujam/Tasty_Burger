import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PromotionImage from "../../assets/promotion/pro.png";

function Section4(){
  return (
    <>
      <section className='promotion_section'>
        <Container >
          <Row className='align-items-center'>
            <Col lg={6} className='text-center mb-5 mb-lg-0'>
              <img src={PromotionImage} className='img-fluid' alt='Promotion'/>
            </Col>
            <Col lg={6} className='px-5'>
              <h2>Nothing brings people together like a good burger</h2>
              <p>The classic burger is usually garnished with a variety of toppings such as lettuce, tomato, onion, pickles, cheese.</p>
              <ul>
                <li>
                  <p>
                    Versatility: Burgers can be customized with a wide variety of toppings, sauces, and condiments.
                  </p>
                </li>
                <li>
                  <p>
                    Convenience: They are quick to prepare and easy to eat on the go.
                  </p>
                </li>
                <li>
                  <p>
                    Satisfying: The combination of a juicy patty, fresh vegetables, and a soft bun can be incredibly satisfying.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      {/* BG Parallex Scroll */}
      <section className='bg_parallax_scroll'></section>
    </>
  )
}

export default Section4
