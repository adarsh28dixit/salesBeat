import React from 'react';
import './App.css';
import Continents from './components/Home/Continents';
import Navbar from './components/Navbar/Navbar';
import Countries from './components/Countries/Countries';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Continents/>}/>
        <Route path='/country/:val' element={<Countries/>}/>
      </Routes>
      
     
    </div>
    </BrowserRouter>
  );
}

export default App;
