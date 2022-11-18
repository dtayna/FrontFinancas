import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { PaginaSobre } from './PaginaSobre';
import { PaginaLogin } from './PaginaLogin';
import { PaginaCadastro} from './PaginaCadastro';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

import '../styles/Menu.css';

export function MenuExterno() {
  
    return(
      <Router>
      <div className="row">
      <div className="menu-style">
        <Link to="/sobre"><div className="menu-item left">
        Logo
        </div>
        </Link>
        <Link to="/login"> <div className="menu-item right" onclick="">
       Login
        </div>
        </Link>
        <Link to="/cadastro"><div className="menu-item right" onclick="">
        Cadastrar-se
        </div></Link>
      </div>
      </div>
      <Routes>
          <Route path='/sobre' element={<PaginaSobre/>}/>
          <Route path='/login' element={<PaginaLogin/>}/>
          <Route path='/cadastro' element={<PaginaCadastro/>}/>
        </Routes>
      </Router>
    );
    };

  
    
  export default MenuExterno;