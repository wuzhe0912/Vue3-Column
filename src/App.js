import './App.css';
import { useState, useEffect } from 'react';
import Data from './constants/data';
import Card from './components/Card';

function App() {
  const [caseData, setCaseData] = useState([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setCaseData(Data);
  };

  return (
    <div className='app'>
      <header>
        <h1 className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
          Pitt Wu's Showcase App
        </h1>
      </header>
      <main className='container mx-auto mt-10 grid grid-cols-3 gap-4'>
        {caseData.map((item) => {
          return <Card key={item.name} data={item}></Card>;
        })}
      </main>
      <footer className='bg-sky-700 px-4 py-2 text-center text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
        Copyright &copy; {currentYear}
        <span> Pitt Wu </span>
        Built with React.
      </footer>
    </div>
  );
}

export default App;
