import '../styles/Geral.css';
import React, {  } from "react";
import { MenuExterno } from './MenuExterno';
import { PaginaLogin } from './PaginaLogin';
import { PaginaPrincipal } from './PaginaPrincipal';
import { Rodape } from './Rodape';
import { Link } from 'react-router-dom';

export function PaginaExterna() {

    return (
      <div>
        <MenuExterno/>
        <Rodape/>
      </div>
    );
  }
  
  export default PaginaLogin;