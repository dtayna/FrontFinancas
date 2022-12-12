import './App.css';
import './styles/Geral.css'
import React from 'react';
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import RoutesApp from './routes/RoutesApp';
import { AuthProvider, AuthContext } from './context/auth';
import PaginaInterna from './components/PaginaInterna';

function App() {
  return (
  
    <RoutesApp />
    
   
    // <PaginaExterna/>
    //<PaginaInterna/>
  );
}

export default App;
