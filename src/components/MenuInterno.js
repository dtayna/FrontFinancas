import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { PaginaSobre } from './PaginaSobre';
import { PaginaLogin } from './PaginaLogin';
import { PaginaCadastro} from './PaginaCadastro';
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
      <Link to="/logo"><div className="menu-item left">
      Logo
      </div>
      </Link>
      <Link to="/paginaexterna"> <div className="menu-item right" onclick="">
     Sair
      </div>
      </Link>
      <Link to="/paginaprincipal"><div className="menu-item right" onclick="">
      Perfil
      </div></Link>
    </div>
    </div>
    <Routes>
        <Route path='/sobre' element={<PaginaSobre/>}/>
        <Route path='/paginaexterna' element={<PaginaExterna/>}/>
        <Route path='/paginaprincipal' element={<PaginaPrincipal/>}/>
      </Routes>
    </Router>
  );
  };
  export default MenuInterno;