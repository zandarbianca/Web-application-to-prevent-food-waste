import Login from "./userLogin/components/Login";
import { useState } from 'react';
function App() {
  const [currentPage, setCurrentPage] = useState('LogIn')
  return (
    <div className="App">

      <nav className='nav'>
        <a href='#' onClick={() => setCurrentPage('LogIn')}>
          LogIn
        </a>
      </nav>

      {currentPage === 'LogIn' && <Login />}
    </div>
  );
}

export default App;
