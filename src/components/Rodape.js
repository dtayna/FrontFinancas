import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import '../styles/Rodape.css';
import '../styles/Geral.css';

export function Rodape() {
    return(
        <div className="row">
            <div className="rodape-style h-white">
                <div className="espaco0"></div>
                <div className="row center">
                    <div className="col-12 col-sm-4">
                        <h5>Sobre</h5>
                        <br></br>
                        <p>blablabla</p>
                    <p>blulbu</p>
                    <p>asknaskdkaks</p>
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
                            <p>Twitter: blabla</p>
                            <p>E-mail: blabla@gmail.com</p>
                             <p> Telefone: 99999-9999</p>
                             <p> Instagram: blabla</p>
                        </div>
                </div>
                <br></br>
            </div>
      </div>
    );
    };
  export default Rodape;