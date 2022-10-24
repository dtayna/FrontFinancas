import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { PaginaPrincipal } from './PaginaPrincipal';
import { PaginaInvestimentos} from './PaginaInvestimentos';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import '../styles/Menu.css';

export function MenuInterno() {
  return(
    <Router>
    <div className="row">
      <div className="menu-style">
        <nav class="navbar navbar-expand-lg" background-color="#3e879e;">
        <Link to="/">
          <div className="menu-item left">
            Logo
          </div>
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <div className="menu-item left">
        <Link to="/">
          <div className="menu-item left">
            Contas
            </div>
        </Link>
        </div>
        </li>
        <li class="nav-item active">
        <Link to="/"><div className="menu-item left">
            Empréstimos
            </div>
        </Link>
        </li>
        <li class="nav-item active">
        <Link to="/investimentos"><div className="menu-item left">
            Investimentos
            </div>
        </Link>
        </li>
        <li class="nav-item active">
        <Link to="/"><div className="menu-item left">
            Relatórios
            </div>
        </Link>
        </li>
        <li className="nav-item active">
        <Link to="/"><div className="menu-item left">
            Declaração Imposto de Renda
            </div>
        </Link>
        </li>
        
        <li class="nav-item dropdown">
            <Link to="/"><div className="menu-item left">
                Perfil
                </div>
            </Link>
        </li>
      </ul>
    </div>
  </nav>
  </div>
  </div>
  <Routes>
          <Route path='/' element={<PaginaPrincipal/>}/>
          <Route path='/investimentos' element={<PaginaInvestimentos/>}/>
    </Routes>
  </Router>
  );
  };
  export default MenuInterno;