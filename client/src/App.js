import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>    
    <Navbar/>
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>
    </>
  );
};

export default App;
