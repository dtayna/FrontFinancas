import '../styles/Geral.css';
import React, { useState } from "react";
import { MenuExterno } from './MenuExterno';
import { PaginaLogin } from './PaginaLogin';
import { PaginaPrincipal } from './PaginaPrincipal';
import { Rodape } from './Rodape';
import { Link } from 'react-router-dom';

export function PaginaExterna({pageExternaToRoutes}) {

  const pageMenuToExterna = (token) => {
      pageExternaToRoutes(token)
  }
    return (
      <div>
        <MenuExterno pageMenuToExterna={pageMenuToExterna}/>
        <Rodape/>
      </div>
    );
  }
  
  export default PaginaExterna;