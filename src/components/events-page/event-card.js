import React from 'react';
import { Card } from 'react-bootstrap';
import './event-card.scss';
import { FaWhatsapp } from 'react-icons/fa';

const EventCard = ({ name, title, price, image }) => {
  const whatsappMessage = `${name} hakkında bilgi almak istiyorum`;

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={`${process.env.PUBLIC_URL}/images/events/${image}`} alt={title} className="img-fluid" />
      <Card.Body>
        <div className="product-card__details">
          <h2 className="product-card__name">{name}</h2>
          <div className='product-card__kutu'>
            <p className="product-card__title">{title}</p>
          </div>
          <p className="product-card__price">{price}MZN</p>

          {/* WhatsApp Butonu ve "Buy Now" Yazısı */}
          <a 
            href={`https://wa.me/+258845629356?text=${encodeURIComponent(whatsappMessage)}`} 
            className="product-card__whatsapp" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> comprar Agora
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;
