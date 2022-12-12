import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { PaginaSobre } from './PaginaSobre';
import PaginaPrincipal from "./PaginaPrincipal";
import PaginaExterna from "./PaginaExterna";
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
      <Link to="/"><div className="menu-item left">
      Logo
      </div>
      </Link>
      <Link to="/"> <div className="menu-item right" onclick="">
     Sair
      </div>
      </Link>
     <Link to="/home"><div className="menu-item right" onclick="">
      Perfil
      </div></Link>
    </div>
    </div>
    <Routes>
        <Route path='/' element={<PaginaSobre/>}/>
        <Route path='/' element={<PaginaSobre/>}/>
        <Route path='/home' element={<PaginaPrincipal/>}/>
      </Routes>
    </Router>
  );
  };
  export default MenuInterno;