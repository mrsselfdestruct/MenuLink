import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Utilizando 'lazy'
const Home = lazy( () => import('./pages/Home.jsx') );
const Sobre = lazy( () => import('./pages/Sobre.jsx') );
const Contato = lazy( () => import('./pages/Contato.jsx') );

function App() {
  return (
    <>
      <Navbar/>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sobre' element={<Sobre/>}/>
          <Route path='/contato' element={<Contato/>}/>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;