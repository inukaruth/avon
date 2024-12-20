import React from 'react';
import './product-list.scss';
import EventCard from './event-card';
import data from '../../helpers/data/events.json'; // Assuming you have your JSON data here

const ProductList = () => {
  return (
    <div className="product-list">
      {data
        .filter((product) => product.name.trim() !== '') // name boş değilse devam et
        .map((product) => (
          <EventCard
            key={product.id}
            name={product.name}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
    </div>
  );
};

export default ProductList;
