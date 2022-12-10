import '../styles/Geral.css';
import React, {  } from "react";
import { MenuInterno } from './MenuInterno';
import { Rodape } from './Rodape';
import MenuLateral from './MenuLateral';

export function PaginaInterna() {

    return (
      <div>
        <MenuInterno/>
        <div className="row" id="wraper">
            <MenuLateral/>
        </div>
        <Rodape/>
      </div>
    );
  }
  
  export default PaginaInterna;