import React from 'react';
// Importar ReactDOM
import ReactDOM from 'react-dom/client';
// Habilitar o roteamento
import { BrowserRouter } from 'react-router-dom';
// Componente principal da aplicação
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);