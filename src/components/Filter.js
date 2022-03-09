import { useEffect } from 'react';
import '../Styles/Filter.css';

function Filter({ caseData, setFiltered, actived, setActived, tagList }) {
  useEffect(() => {
    if (actived === 'All') {
      setFiltered(caseData);
      return;
    }
    const filtered = caseData.filter((item) => item.tags.includes(actived));
    setFiltered(filtered);
  }, [actived, caseData, setFiltered]);

  return (
    <div className='filter-wrapper px-10'>
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
