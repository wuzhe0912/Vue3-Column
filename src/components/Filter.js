import { useState, useEffect } from 'react';
import '../Styles/Filter.css';

function Filter({ caseData, setFiltered, actived, setActived, tagList }) {
  useEffect(() => {
    if (actived === 'All') {
      setFiltered(caseData);
      return;
    }
  }, [actived, caseData, setFiltered]);

  // const selectTag = (value) => {
  //   setActived(value);
  // };

  // useEffect(() => {
  //   filterList(actived);
  // }, [actived]);

  return (
    <div className='filter-wrapper px-10'>
      <button
        className={`btn mr-1 px-4 py-1 ${actived === 'All' ? 'active' : null}`}
        onClick={() => setActived('All')}
      >
        All
      </button>
      {tagList.map((filter, index) => {
        return (
          <button
            className={`btn mr-1 px-4 py-1 ${
              actived === filter ? 'active' : null
            }`}
            key={index}
            onClick={() => setActived(filter)}
          >
            {filter}
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
