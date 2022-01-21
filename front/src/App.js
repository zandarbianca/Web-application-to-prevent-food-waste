import './App.css';
import logo from './logo.svg'
import HomePage from './components/HomePage'
import { useEffect, useState } from 'react'
import AdaugaAliment from './components/AdaugaAliment'

function App() {



  return (

    <div className="App">

      <nav className='nav'>
        <a href='#' onClick={() => setCurrentPage('Home')}>
          Home
        </a>
        <a href='#' onClick={() => setCurrentPage('AdaugaAliment')}>
          Alimente
        </a>
      </nav>


      {currentPage === 'Home' && <HomePage />}
      {currentPage === 'AdaugaAliment' && <AdaugaAliment />}

    </div>
  );
}

export default App;
