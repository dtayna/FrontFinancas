import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import editarIcon from '../images/editarIcon.png';
import removerIcon from '../images/removerIcon.png';


export function ItemGanho() {


    return (
        <div className="row border-thin margin-t-5"> 
        <div className="col-12">
            <div className="row border-b-thin margin-t-5"> 
                <div className="col-8"> <h4> Descrição </h4> </div>
                <div className="col-2">  <img className="right" width="30px" height="30px" src={editarIcon}></img> </div>
                <div className="col-2"> <img className="right"  width="30px" height="30px" src={removerIcon}></img> </div>
            </div>
            <div className="row padding-top-1"> 
                <div className="col-sm-7 col-12 border-r-thin"> <h6 > Valor: R$ 30,00 </h6> </div>
                <div className="col-sm-5 col-12"><h6>Data de Entrada: 20/09/2022</h6></div>
            </div>
        </div>
        </div>
    );
  }
  
  export default ItemGanho;