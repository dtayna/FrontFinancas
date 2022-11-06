import '../styles/Geral.css';
import React, { useState } from "react";
import {api} from '../server';

export function PaginaLogin() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userLogin, setUserLogin] = useState({login:'', password:'' })

    const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const loggerUser =  async () => {
    const response = await api.post("/login", userLogin);
    console.log(response)
    if(response.status == 200){
        console.log(response.data) 
    }else{
        console.log("erro ao solicitar login!") 
    }

  }

    return (
      <div  className='conteudo-login '>
          <div className="row espaco2">
              <br></br>
          </div>
          <div className="conteudo row ">
            <div className="col-lg-4 col-1 espaco0"></div>
            <div className="col-lg-4 col-10 padding-10 white h-blue border-r">
                <br></br>
                <h1 className="center">Login</h1>
                    <form>
                    <div className="input-container">
                        <label>Username: </label>
                        <input type="text" className="inputs" name="username" required 
                            onChange={(e) => setUserLogin({...userLogin, login: e.target.value})}
                        />
                        {renderErrorMessage("uname")}
                    </div>
                    <div className="input-container">
                        <label>Password: </label>
                        <input type="password" className="inputs" name="password" required 
                            onChange={(e) => setUserLogin({...userLogin, password: e.target.value})}
                        />
                        {renderErrorMessage("pass")}
                    </div>
                   
                   
                    <div className="center">
                        <input type="submit" className="botao-sub" value="Entrar" 
                        onClick={(e)=> {e.preventDefault(); loggerUser()}}/>
                    </div>
                   
                    <p className="right">Esqueceu sua senha?</p>
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
  
  export default PaginaLogin;