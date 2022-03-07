import React from 'react';
import '../Styles/Card.css';

function Card({ data }) {
  const { name, image_url } = data;

  return (
    <div className='card-item rounded-xl p-3'>
      <h2 className='mb-2'>{name}</h2>
      <img src={image_url} alt={name} className='object-fit mb-2 h-52 w-full' />
    </div>
  );
}

export default Card;
