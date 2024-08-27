import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Burger from "../../assets/hero/hero-2.png";
import { Link } from 'react-router-dom';

const Section1 = () => {
  return (
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg={7} className='mb-5 mb-lg-0'>
          <div className='position-relative'>
            <img src={Burger} className='img_fluid' alt='Hero' style={{ width: '100%', maxWidth: '700px' }}/>
            <div className='price_badge'>
              <div className='badge_text'>
                <h4 className='h4_xs'>Only</h4>
                <h4 className='h4_lg'>$6.99</h4>
              </div>
            </div>
          </div>
          </Col>
          <Col lg={5}>
          <div className='hero_text text_center'>
            <h1 className='text_white'>New Burger</h1>
            <h2 className='text_white'>With Onion</h2>
            <p className='text_white pt-2 pb-4'>
            A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll. 
            </p>
            <Link to='/menu' className='btn order_now'>
              Order Now
            </Link>
          </div>
          </Col>
        </Row>

      </Container>
    </section>
  )
}

export default Section1;
