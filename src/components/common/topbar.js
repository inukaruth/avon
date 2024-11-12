import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { config } from '../../helpers/config'; // Dosya yolunu projenin yapısına göre düzenle

import "./topbar.scss";

const Topbar = () => { 
  return (
      <Container className="topbar-container">
          <Nav.Link className="whatsapp-link" href={`https://wa.me/${config.contact.phone1}`} target="_blank">
            <FaWhatsapp />
          </Nav.Link>
          <Nav.Link className="facebook-link" href={config.contact.socialMedia.facebook} target="_blank">
            <FaFacebook /> 
          </Nav.Link>
          <Nav.Link className="instagram-link" href={config.contact.socialMedia.instagram} target="_blank">
            <FaInstagram /> 
          </Nav.Link>
      </Container>
  );
};

export default Topbar;
