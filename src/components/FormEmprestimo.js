import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { useEffect, useState } from "react";
import {api} from '../server';

export function FormEmprestimo() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    return (


                <form>
                     <div className="row border-b-thin">
                        <div className="col-7 ">
                            <h3>Cadastrar Novo Empréstimo</h3>
                         </div>
                    </div>
                    <div className="row espaco00"></div>
                    <div className="row ">
                        <div className="col-5">
                            <div className="input-container">
                                <label>Descrição: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="descricao"/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Valor: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="valor" id="valor" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Quantidade de parcelas: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="qtd_parcelas" id="qtd_parcelas" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Valor a pagar: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="valor_pagar" id="valor_pagar" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Tipo juros: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="tipo_juros" id="tipo_juros" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Juros: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="juros" id="juros" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Data de entrada: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="data_entrada" id="data_entrada" />
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Data de vencimento: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="data_vencimento" id="data_vencimento" />
                            </div>
                        </div>
                        
                    </div>
                    
                   
                    <br></br>
                    <div className="row">

                        <div className="col-2">
                        </div>

                        <div className="col-4">
                        <input type="reset" className="margin-lr-5 margin-t-5 botao-cancel" value="Cancelar"/>
                        </div>

                        <div className="col-4">
                            <input type="submit" className="margin-lr-5 margin-t-5 botao-sub right" value="Cadastrar"/>
                        </div>
                    </div>
                    </form>

    );
  }
  
  export default FormEmprestimo;