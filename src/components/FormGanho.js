import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";


export function FormGanho() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

    return (


                <form>
                     <div className="row border-b-thin">
                        <div className="col-5 ">
                            <h3>Ganho</h3>
                         </div>
                    </div>
                    <div className="row espaco00"></div>
                    <div className="row ">
                        <div className="col-7">
                            <div className="input-container">
                                <label>Descrição: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="descricao" required />
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-container">
                                <label>Valor: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="valor" required />
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container margin-lr-5">
                                <label>Data de Entrada: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="datavencimento" required />
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                    </div>
                    
                   
                    <br></br>
                    <div className="row">

                        <div className="col-6">
                        </div>

                        <div className="col-3">
                        <input type="reset" className="margin-lr-5 margin-t-5 botao-cancel" value="Cancelar"/>
                        </div>

                        <div className="col-3">
                            <input type="submit" className="margin-lr-5 margin-t-5 botao-sub" value="Cadastrar"/>
                        </div>
                    </div>
                    </form>

    );
  }
  
  export default FormGanho;