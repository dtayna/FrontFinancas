import './App.css';
import './styles/Geral.css'
import { PaginaInterna} from './components/PaginaInterna';
import { PaginaExterna} from './components/PaginaExterna';
import React from 'react';
import {list} from './server';
import PaginaCadastro from './components/PaginaCadastro';
import PaginaLogin from './components/PaginaLogin';

function App() {
  return (
    <PaginaInterna/>
  );
}

export default App;
