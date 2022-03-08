import './App.css';
import { useState, useEffect } from 'react';
import Data from './constants/data';
import Card from './components/Card';
import Filter from './components/Filter';

function App() {
  const [caseData, setCaseData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [tagList, setTagList] = useState([]);
  const [actived, setActived] = useState('All');
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setCaseData(Data);
    setFiltered(Data);
    getTagList();
  };

  const getTagList = () => {
    const filterList = new Set();
    const repeatList = new Set();
    const cloneData = Data;
    cloneData.forEach((node) => {
      filterList.has(node.filterTag)
        ? repeatList.add(node.filterTag)
        : filterList.add(node.filterTag);
    });
    setTagList(filterList);
  };

  return (
    <div className='app'>
      <header>
        <h1 className='px-4 py-2 text-3xl sm:px-8 sm:py-3'>Showcase App</h1>
      </header>
      <main className='container mx-auto mt-10'>
        <Filter
          caseData={caseData}
          setFiltered={setFiltered}
          actived={actived}
          setActived={setActived}
          tagList={tagList}
        />
        <div className='card-wrapper grid gap-4 px-10 py-4'>
          {caseData.map((item) => {
            return <Card key={item.name} data={item}></Card>;
          })}
        </div>
      </main>
      <footer className='mt-10 px-4 py-2 text-center sm:px-8 sm:py-3'>
        Copyright &copy; {currentYear}
        <span> Pitt Wu </span>
        Built with React.
      </footer>
    </div>
  );
}

export default App;
