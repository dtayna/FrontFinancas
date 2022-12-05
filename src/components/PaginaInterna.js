import '../styles/Geral.css';
import React, {  } from "react";
import { MenuInterno } from './MenuInterno';
import { Rodape } from './Rodape';
import MenuLateral from './MenuLateral';

export function PaginaInterna({pageRoutesToInterna}) {

  const pageInternaToRoutes = (logado) => {
   
 }
 const pageInternaToMenu = (token) => {
    pageRoutesToInterna(token)
}

    console.log(pageRoutesToInterna, "chegou em interna")
    console.log(pageInternaToMenu, "chegou em interna-contas")
    return (
      <div>
        <MenuInterno/>
        <div className="row" id="wraper">
            <MenuLateral pageInternaToMenu={pageRoutesToInterna}/>
        </div>
        <Rodape/>
      </div>
    );
  }
  
  export default PaginaInterna;