import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { PaginaPrincipal } from './PaginaPrincipal';
import { PaginaInvestimentos} from './PaginaInvestimentos';
import logotipo3 from '../images/logotipo3.png';
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
    <div className="row">
    <div className="menu-style">
        <div className="menu-item left">
          Logo
      </div>
    </div>
    </div>
  );
  };
  export default MenuInterno;