import React from 'react';
import Header from './components/Header/Header';
import IndexRoutes from './Routes';
import {BrowserRouter} from 'react-router-dom';

import './App.css'


// import './App.css';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <IndexRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;