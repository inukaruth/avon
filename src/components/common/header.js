// header.js
import React from 'react';
import { Container, Row, Col, Form, FormControl, Button, Nav } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBasketShopping, faList, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; // `faMagnifyingGlass` ekledik
import './header.scss';

const Header = () => {
  return (
    <header>
      <Container className="header-container">
        <Nav.Link className="kategori">
          <FontAwesomeIcon icon={faList} />
          <span className="menu">menu</span>
        </Nav.Link>

        <Nav.Link className="sollogo">
          <img src="/images/logo.png" alt="Logo" className="logo" />
        </Nav.Link>
        
        <Nav.Link className="search">
          <Form>
            <span className='satir'>
              <FormControl type="search" placeholder="Search" />
            </span>
            <Button className='buton'>
              <FontAwesomeIcon icon={faMagnifyingGlass} /> {/* İkon doğru biçimde kullanıldı */}
            </Button>
          </Form>
        </Nav.Link>

        <Nav.Link className="sepet">
          <FontAwesomeIcon icon={faBasketShopping}/>
        </Nav.Link>
      </Container>
    </header>
  );
};

export default Header;
