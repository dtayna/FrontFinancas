import React, {  } from "react";
import '../styles/Menu.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { PaginaExterna} from './PaginaExterna';

export function MenuInterno() {
  return(
    <div className="row">
    <div className="menu-style">
        <div className="menu-item left">
          Logo
      </div>
      <div className="menu-item right">
        Sair
      </div>
      <div className="menu-item right">
        Perfil
      </div>
    </div>
    </div>
  );
  };
  export default MenuInterno;