import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Section7() {
  return (
    <section className='contact_section'>
      <Container>
        <Row className='justify-content-center'>
          <Col sm={8} className='text-center'>
            <h4>We Gurantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p> 
              A "Contact Us" page for a food delivery app provides users with a way to get in touch with the app's customer support or service team. It typically includes essential information such as a customer service.
            </p>
            <Link to='/' className='btn btn_red px-4 py-2 rounded-0 '>
              Call: 999-888-777
            </Link>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default Section7
