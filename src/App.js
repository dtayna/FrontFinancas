import './App.css';
import './styles/Geral.css'
import React from 'react';
import PaginaLogin from './components/PaginaLogin';
import { AuthProvider, AuthContext } from './context/auth';
import PaginaContas from './components/PaginaContas';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PaginaEmprestimo from './components/PaginaEmprestimo';
import PaginaInvestimentos from './components/PaginaInvestimentos';

function App() {
  return (
    <AuthProvider>
    <Router>
    <Routes>
          <Route path='/' element={<PaginaLogin />}/>
          <Route path='/cadastro' element={<PaginaLogin />}/>
          <Route path='/emprestimo' element={<PaginaEmprestimo/>}/>
          <Route path='/investimento' element={<PaginaInvestimentos/>}/>
          <Route path='/contas' element={<PaginaContas/>}/>
        </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
