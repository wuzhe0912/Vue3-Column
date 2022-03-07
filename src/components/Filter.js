import { useState } from 'react';
import '../Styles/Filter.css';

function Filter({ filtered }) {
  const cloneFilter = [];
  filtered.forEach((filter) => cloneFilter.push(filter));

  const [actived, setActived] = useState('All');

  const selectTag = (value) => {
    setActived(value);
  };

  return (
    <div className='filter-wrapper px-10'>
      <button
        className={`btn mr-1 px-4 py-1 ${actived === 'All' ? 'active' : null}`}
        onClick={() => selectTag('All')}
      >
        All
      </button>
      {cloneFilter.map((filter, index) => {
        return (
          <button
            className={`btn mr-1 px-4 py-1 ${
              actived === filter ? 'active' : null
            }`}
            key={index}
            onClick={() => selectTag(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
