import './App.css';
import './styles/Geral.css'
import { PaginaInterna} from './components/PaginaInterna';
import { PaginaExterna} from './components/PaginaExterna';
import React from 'react';
import {list} from './server';
import PaginaCadastro from './components/PaginaCadastro';
import PaginaLogin from './components/PaginaLogin';
import PaginaPrincipal from './components/PaginaPrincipal';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import PaginaSobre from './components/PaginaSobre';
import RoutesApp from './routes/RoutesApp';

function App() {
  return (
  
     // <RoutesApp />
    
   
     //<PaginaExterna/>
     <PaginaInterna/>
  );
}

export default App;
