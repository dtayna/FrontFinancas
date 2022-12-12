import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import '../styles/Rodape.css';
import '../styles/Geral.css';

export function Rodape() {
    return(
        
        <div className="row">
            
            <div className="rodape-style h-white">
                <div className="espaco00"></div>
                <div className="row center">
                    <div className="col-12 col-sm-4">
                        <h5>Sobre</h5>
                        <br></br>
                        <p>Controle de Contas/Ganhos/Gastos</p>
                    <p>Controle de Empréstimos</p>
                    <p>Controle de Investimentos</p>
                    <br></br>
                    </div>
                    <div className="col-12 col-sm-4">
                    <h5>Desenvolvedoras</h5>
                    <br></br>
                    <p>Débora Tayná</p>
                    <p>Ana Luisa</p>
                    <p>Michelle Texeira</p>
                    <br></br>
                    </div>
                    <div className="col-12 col-sm-4">
                        <h5>Contatos</h5>
                        <br></br>
                            <p>E-mail: gerenciesuasfinancas@gmail.com</p>
                             <p> Telefone: 99999-9999</p>
                             <p>Telegram: @gerenciesuasfinancas</p>
                             <p> Instagram: @gerenciesuasfinancas</p>
                        </div>
                </div>
            </div>
            <div className="color-gray-2 row  h-white center padding-top-1">
                <p>Instituto Metrópole Digital - UFRN</p>
            </div>
            
      </div>

    );
    };
  export default Rodape;