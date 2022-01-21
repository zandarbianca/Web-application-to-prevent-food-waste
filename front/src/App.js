import './App.css';

import HomePage from './components/HomePage'
import { useEffect, useState } from 'react'
import AdaugaAliment from './components/AdaugaAliment'


import Login from "./components/Login";
import { useState } from 'react';
function App() {
  const [currentPage, setCurrentPage] = useState('LogIn')
  return (

    <div className="App">

      <nav className='nav'>
        <a href='#' onClick={() => setCurrentPage('LogIn')}>
          LogIn
        </a>
        <a href='#' onClick={() => setCurrentPage('Home')}>
          Home
        </a>
        <a href='#' onClick={() => setCurrentPage('AdaugaAliment')}>
          Alimente
        </a>

      </nav>


      {currentPage === 'Home' && <HomePage />}
      {currentPage === 'AdaugaAliment' && <AdaugaAliment />}
      {currentPage === 'LogIn' && <Login />}




    </div>
  );
}


export default App;
