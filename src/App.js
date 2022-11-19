import './App.css';
import './styles/Geral.css'
import { PaginaInterna} from './components/PaginaInterna';
import React from 'react';
import PaginaCadastro from './components/PaginaCadastro';
import PaginaLogin from './components/PaginaLogin';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <AuthProvider>
         <PaginaLogin/>
    </AuthProvider>
  );
}

export default App;
