import '../styles/Geral.css';
import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { MenuExterno } from './MenuExterno';
import { Rodape } from './Rodape';

export function PaginaCadastro() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

    return (
      <div  className='conteudo-login '>
          <div className="row">
              <br></br>
          </div>
          <div className="conteudo row ">
            <div className="col-lg-4 col-1 espaco0"></div>
            <div className="col-lg-4 col-10 padding-10 white h-blue border-r">
                <br></br>
                <h1 className="center">Cadastro</h1>
                
                    <form>
                    <div className="input-container">
                        <label>Nome: </label>
                        <br></br>
                        <input type="text" className="inputs" name="nome" required />
                        {renderErrorMessage("uname")}
                    </div>
                   
                    <div className="input-container">
                        <label>E-mail: </label>
                        <br></br>
                        <input type="text" className="inputs" name="email" required />
                        {renderErrorMessage("uname")}
                    </div>
                    
                    <div className="input-container">
                        <label>Login: </label>
                        <br></br>
                        <input type="text" className="inputs" name="username" required />
                        {renderErrorMessage("uname")}
                    </div>
                    <div class="row">
                    <div class="col-6">
                    <div className="input-container">
                        <label>Senha: </label>
                         <br></br>
                        <input type="password" className="inputs" name="password" required />
                        {renderErrorMessage("pass")}
                    </div>
                    </div>
                    <div class="col-6">
                    <div className="input-container">
                        <label>Confirmar Senha: </label>
                         <br></br>
                        <input type="password" className="inputs" name="password" required />
                        {renderErrorMessage("pass")}
                    </div>
                    </div>
                    <br></br>
                    
                    </div>
                    <div className="center">
                        <input type="submit" className="botao-sub" value="Cadastrar-se"/>
                    </div>
                    <br></br>
                    </form>
            </div>
            <div className="col-lg-4 col-1 espaco1"></div>
            </div>
            <div className="row espaco3">
                <br></br>
            </div>
      </div>
    );
  }
  
  export default PaginaCadastro;