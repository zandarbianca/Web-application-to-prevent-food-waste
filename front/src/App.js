import './App.css';

import HomePage from './components/HomePage'
import { useEffect, useState } from 'react'
import AdaugaAliment from './components/AdaugaAliment'
import AlimenteUser from './components/AlimenteUser'


import Login from "./components/Login";

function App() {

  const [currentPage, setCurrentPage] = useState('Home')
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('login') || false)
  }, [])

  const onLogin = () => {
    setIsLoggedIn(true)
    localStorage.setItem('login', true)
  }

  const onLogout = () => {
    localStorage.removeItem('id')
    setIsLoggedIn(false)
  }

  const onAddUser = (user) => {
    setUser(user)
  }
  return (

    <div className="App">
      {isLoggedIn && (
        <>
          <nav className='nav'>
           
            <a href='#' onClick={() => setCurrentPage('Home')}>
              Home
            </a>
            <a href='#' onClick={() => setCurrentPage('AdaugaAliment')}>
              Alimente
            </a>
            <a href='#' onClick={() => setCurrentPage('AlimenteUser')}>
              Alimentele Mele
            </a>

          </nav>

          {currentPage === 'Home' && <HomePage />}
          {currentPage === 'AdaugaAliment' && <AdaugaAliment />}
          {currentPage === 'AlimenteUser' && <AlimenteUser  currentUser={user} />}

          
          {currentPage === 'LogIn' && <Login />}
        </>
      )}
      {!isLoggedIn && <Login onLogin={onLogin} onAddUser={onAddUser} />}


    </div>
  );
}


export default App;
