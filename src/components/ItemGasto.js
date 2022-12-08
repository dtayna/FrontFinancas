import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import editarIcon from '../images/editarIcon.png';
import checarIcon from '../images/checarIcon.png';
import removerIcon from '../images/removerIcon.png';
import vermelho from '../images/vermelho.png';
import amarelo from '../images/amarelo.png';
import verde from '../images/verde.png';

export function ItemGasto() {


    return (
        <div className="row border-thin margin-t-5"> 
        <div className="col-12">
            <div className="row border-b-thin margin-t-5"> 
            <div className="col-1"><img width="20px" height="20px" src={amarelo}></img> </div>
                <div className="col-7">
                 <h4> Descrição </h4> 
                 </div>
                <div className="col-sm-2 col-5"> <img className="right" width="30px" height="30px" src={editarIcon}></img> </div>
                <div className="col-sm-2 col-5"> <img className="right"  width="30px" height="30px" src={removerIcon}></img> </div>
            </div>
            
            
            <div className="row border-b-thin padding-top-1">
                <div className="col-lg-4 col-12 border-r-thin"><h6>Alimentação</h6></div>
                <div className="col-lg-8 col-12"><h6>Data de Vencimento: 20/09/2022</h6></div>
            </div>
           
            <div className="row border-b-thin padding-top-1">
                <div className="col-lg-8 col-12 border-r-thin"><h6>Data de Pagamento: 20/09/2022</h6></div>
                <div className="col-lg-4 col-12"><h6>Pago</h6></div>
            </div>
            <div className="row padding-top-1"> 
                <div className="col-sm-7 col-12"> <h5 > Valor: R$ 30,00 </h5> </div>
                <div className="col-sm-5 col-12">
                <input type="submit" className="botao-sub right" value="Pagar"/>
                </div>
                
            </div>
        </div>
        </div>
    );
  }
  
  export default ItemGasto;