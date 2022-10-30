import '../styles/Geral.css';
import React, {  } from "react";
import { MenuExterno } from './MenuExterno';
import { PaginaLogin } from './PaginaLogin';
import { Rodape } from './Rodape';

export function PaginaExterna() {

    return (
      <div>
        <MenuExterno/>
        <Rodape/>
      </div>
    );
  }
  
  export default PaginaLogin;