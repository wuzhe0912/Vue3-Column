import './App.css';
import showCaseData from './constants/data';

function App() {
  console.log(1, showCaseData);

  return (
    <div className='app'>
      <header className=''>
        <h1 className='bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3'>
          Pitt Wu's Showcase App
        </h1>
      </header>
      <main>content</main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
