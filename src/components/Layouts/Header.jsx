import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';  
import { useNavigate } from 'react-router-dom';
import "../../styles/HeaderStyle.css";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo/logo.png";

const Header = () => {
  const { cartItems } = useContext(CartContext);  // Access cartItems from context
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };
  
  window.addEventListener("scroll", changeValueOnScroll);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand href="#home">
            <Link to='/' className='logo'>
              <img src={Logo} alt="Logo" className='img-fluid' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/about'>About</Nav.Link>
              <Nav.Link as={Link} to='/menu'>Our Menu</Nav.Link>
              <Nav.Link as={Link} to='/shop'>Shop</Nav.Link>     
              <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
              <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
              <Nav.Link as={Link} to='/shopingCart'>
                <div className='cart'>
                  <i className="bi bi-bag fs-5"></i>
                  <em className='roundpoint'>{cartItems.length}</em>
                </div>
              </Nav.Link> 
              <button 
                className="sign-in" 
                onClick={() => navigate('/signin')}>
                Sign In
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;






