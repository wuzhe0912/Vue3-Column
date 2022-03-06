import React from 'react';

function Card({ data }) {
  const { name, image_url } = data;

  return (
    <div className='card-wrapper max-w-sm overflow-hidden rounded shadow-lg'>
      <div className='h-52'>
        <img
          src={image_url}
          alt={name}
          className='h-full w-full object-cover'
        />
      </div>
      <h2>{name}</h2>
    </div>
  );
}

export default Card;
