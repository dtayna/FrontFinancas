import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";


export function FormConta() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

    return (


                <form>
                     <div className="row border-b-thin">
                        <div className="col-7 ">
                            <h3>Cadastrar Nova Conta</h3>
                         </div>
                    </div>
                    <div className="row espaco00"></div>
                    <div className="row ">
                    <div className="col-2"></div>
                        <div className="col-5">
                            <div className="input-container">
                                <label>Nome: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="nome" required />
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Valor: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="valor" required />
                                {renderErrorMessage("uname")}
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
  
  export default FormConta;