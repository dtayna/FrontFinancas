import '../styles/Geral.css';
import React, { useState } from "react";
import {api}  from '../server';
import { useNavigate } from "react-router-dom";

export function PaginaCadastro() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [user, setUser] = useState({name: '', login: '', email: '', password: '', 
    confirmPassword:''})
    //const navigate = useNavigate();

    const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const saveUser =  async () => {
    if(user.confirmPassword == user.password){
        const response = await api.post("user", user)
        response.status == 200? 
            console.log(response.data)  : console.log("erro ao tentar salvar usuário")
            //navigate("/login")

    }else{
        console.log("senha inválida")
    }
  } 

    return (
      <div  className='conteudo-login '>
          <div className="row">
              <br></br>
          </div>
          <div className="conteudo row ">
            <div className="col-lg-4 col-1 espaco0"></div>
            <div className="col-lg-4 col-10 padding-10 white h-blue border-r">
            <form>
                <br></br>
                <h1 className="center">Cadastro</h1>
                    <div className="input-container">
                        <label>Nome: </label>
                        <br></br>
                        <input type="text" className="inputs" name="nome" required 
                            onChange={(e)=> setUser({...user, name: e.target.value}) }
                        />
                        {renderErrorMessage("uname")}
                    </div>
                   
                    <div className="input-container">
                        <label>E-mail: </label>
                        <br></br>
                        <input type="text" className="inputs" name="email" required 
                            onChange={(e)=> setUser({...user, email: e.target.value}) }
                        />
                        {renderErrorMessage("uname")}
                    </div>
                    
                    <div className="input-container">
                        <label>Login: </label>
                        <br></br>
                        <input type="text" className="inputs" name="username" required 
                            onChange={(e)=> setUser({...user, login: e.target.value}) }
                        />
                        {renderErrorMessage("uname")}
                    </div>
                    <div class="row">
                    <div class="col-6">
                    <div className="input-container">
                        <label>Senha: </label>
                         <br></br>
                        <input type="password" className="inputs" name="password" required 
                            onChange={(e)=> setUser({...user, password: e.target.value}) }
                        />
                        {renderErrorMessage("pass")}
                    </div>
                    </div>
                    <div class="col-6">
                    <div className="input-container">
                        <label>Confirmar Senha: </label>
                         <br></br>
                        <input type="password" className="inputs" name="password" required 
                            onChange={(e)=> setUser({...user, confirmPassword: e.target.value}) }
                        />
                        {renderErrorMessage("pass")}
                    </div>
                    </div>
                    <br></br>
                    
                    </div>
                    <div className="center">
                        <input type="submit" className="botao-sub" value="Cadastrar-se"
                        onClick={(e)=> {e.preventDefault(); saveUser()}}
                        />
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