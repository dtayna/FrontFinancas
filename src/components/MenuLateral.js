import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { PaginaPrincipal } from './PaginaPrincipal';
import { PaginaInvestimentos} from './PaginaInvestimentos';
import PaginaEmprestimo from "./PaginaEmprestimo";
import PaginaDeclaracao from "./PaginaDeclaracao";
import PaginaRelatorios from "./PaginaRelatorios";
import PaginaContas from "./PaginaContas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import '../styles/Menu.css';
import { AuthProvider } from "../context/auth";


export function MenuLateral({pageInternaToMenu}) {
    
    const pageMenuToContas = (token) => {
        pageInternaToMenu(token)
    }
    console.log(pageInternaToMenu, "chegou no menu lateral")
  return(
    <AuthProvider>
    <Router>
        <div className="menu-lateral-style col-4 col-lg-2">
            <div className="row">
                <div className="col-12">
                    <Link to="/home">
                        <div className="menu-lateral-item left">
                            Home
                        </div>
                    </Link>
                    <Link to="/contas">
                        <div className="menu-lateral-item left">
                            Contas
                        </div>
                    </Link>
                    <Link to="/emprestimos">
                        <div className="menu-lateral-item left">
                            Empréstimos
                        </div>
                    </Link>
                    <Link to="/investimentos">
                        <div className="menu-lateral-item left">
                            Investimentos
                        </div>
                    </Link>
                    <Link to="/relatorios">
                        <div className="menu-lateral-item left">
                            Relatórios
                        </div>
                    </Link>
                    <Link to="/declaracao">
                        <div className="menu-lateral-item left">
                           Imposto de Renda
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        <Routes>
            <Route path='/home' element={<PaginaPrincipal/>}/>
          <Route path='/contas' element={<PaginaContas/>}/>
          <Route path='/emprestimos' element={<PaginaEmprestimo/>}/>
          <Route path='/investimentos' element={<PaginaInvestimentos/>}/>
          <Route path='/relatorios' element={<PaginaRelatorios/>}/>
          <Route path='/declaracao' element={<PaginaDeclaracao/>}/>
        </Routes>
    </Router>
    </AuthProvider>
  );
  };
  export default MenuLateral;