import React from 'react';
import { motion } from 'framer-motion';
import { FaLink, FaGithubSquare } from 'react-icons/fa';
import '../Styles/Card.css';

function Card({ data }) {
  const { name, image_url, tags, link_url, source_code } = data;

  return (
    <motion.div layout className='card-item rounded-xl p-3'>
      <h2 className='mb-2 font-bold'>{name}</h2>
      <img
        src={image_url}
        alt={name}
        className='mb-2 h-52 w-full object-cover'
      />
      <div className='mb-4'>
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className='inlin-block font-semiblod mt-2 mr-2 rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700'
            >
              # {tag}
            </span>
          );
        })}
      </div>
      <div className='flex justify-between'>
        <a
          className='link-icon flex items-center justify-center'
          href={link_url}
          target='_blank'
          rel='noreferrer'
        >
          <FaLink className='mr-1' />
          Link
        </a>
        <a
          className='link-icon flex items-center justify-center'
          href={source_code}
          target='_blank'
          rel='noreferrer'
        >
          <FaGithubSquare className='mr-1' />
          Code
        </a>
      </div>
    </motion.div>
  );
}

export default Card;
