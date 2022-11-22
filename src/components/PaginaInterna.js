import '../styles/Geral.css';
import React, {  } from "react";
import { MenuInterno } from './MenuInterno';
import { Rodape } from './Rodape';
import MenuLateral from './MenuLateral';

export function PaginaInterna({pageRoutesToInterna}) {

  const pageInternaToRoutes = (logado) => {
   
 }
    console.log(pageRoutesToInterna, "chegou em interna")
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