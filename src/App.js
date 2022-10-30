import './App.css';
import './styles/Geral.css'
import { PaginaInterna} from './components/PaginaInterna';
import React from 'react';
import {list} from './server';
import PaginaCadastro from './components/PaginaCadastro';
import PaginaLogin from './components/PaginaLogin';

function App() {
  return (
    <PaginaLogin/>
  );
}

export default App;
