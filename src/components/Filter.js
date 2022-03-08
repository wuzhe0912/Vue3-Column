import { useState, useEffect } from 'react';
import '../Styles/Filter.css';

function Filter({ caseData, setFiltered }) {
  const cloneData = caseData;
  const [actived, setActived] = useState('All');
  const [tagList, setTagList] = useState([]);

  useEffect(() => {
    getTagList();
  }, []);

  const getTagList = () => {
    const filterList = new Set();
    const repeatList = new Set();
    console.log(456, cloneData);
    cloneData.forEach((node) => {
      filterList.has(node.filterTag)
        ? repeatList.add(node.filterTag)
        : filterList.add(node.filterTag);
    });
    // filterList.push(actived);
    console.log(123, filterList);
    setTagList(filterList);
  };

  // const selectTag = (value) => {
  //   setActived(value);
  // };

  // useEffect(() => {
  //   filterList(actived);
  // }, [actived]);

  return (
    <div className='filter-wrapper px-10'>
      {/* <button
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
      })} */}
    </div>
  );
}

export default Filter;
