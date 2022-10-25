import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { PaginaPrincipal } from './PaginaPrincipal';
import { PaginaInvestimentos} from './PaginaInvestimentos';
import { PaginaContas} from './PaginaContas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import '../styles/Menu.css';

export function MenuLateral() {
  return(
    <Router>
        <div className="menu-lateral-style col-4 col-lg-2">
            <div className="row">
                <div className="col-12">
                    <Link to="/">
                        <div className="menu-lateral-item left">
                            Home
                        </div>
                    </Link>
                    <Link to="/contas">
                        <div className="menu-lateral-item left">
                            Contas
                        </div>
                    </Link>
                    <Link to="/investimentos">
                        <div className="menu-lateral-item left">
                            Investimentos
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="menu-lateral-item left">
                            Empréstimos
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="menu-lateral-item left">
                            Relatórios
                        </div>
                    </Link>
                    <Link to="/">
                        <div className="menu-lateral-item left">
                           Imposto de Renda
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Routes>
          <Route path='/' element={<PaginaPrincipal/>}/>
          <Route path='/investimentos' element={<PaginaInvestimentos/>}/>
          <Route path='/contas' element={<PaginaContas/>}/>
        </Routes>
    </Router>
  );
  };
  export default MenuLateral;