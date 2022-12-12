import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { ReactNode, useStatem, useContext, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import {api}  from '../server';
import { Link, redirect, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/auth';

export function FormInvestimento() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [investimento, setInvestimento] = useState({
        corretora:'', 
        data_investimento:'', 
        id_investimento:'',
        investido:'',
        objetivo:'',
        tipo_titulo:'',
        titulo:'',
        vencimento_titulo:'' });
    //const navigate = useNavigate();

    const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

    const { user } = useContext(AuthContext);

    const saveInvestimento =  async () => {
        var investimentoObj = {corretora: investimento.corretora, data_investimento: investimento.data_investimento, id_investimento: investimento.id_investimento,
            investido: investimento.investido, objetivo: investimento.objetivo, tipo_titulo: investimento.tipo_titulo, titulo: investimento.titulo, vencimento_titulo: investimento.vencimento_titulo,
                       user_id: user? user.id: null}
        const response = await api.post("/emprestimo", investimentoObj);
        if(response.status == 200){
            console.log(response.data)
        }else{
            console.log("erro ao tentar salvar investimento")
        }
    }


       /* const saveInvestimento =  async () => {
            const response = await api.post("/investment", investimento);
            response.status == 200? 
            console.log(response.data)  : console.log("erro ao tentar salvar usuário")
            
        }*/

    return (
                <form>
                    <div  className='conteudo-investimento '></div>
                     <div className="row border-b-thin">
                        <div className="col-5 ">
                            <h3>Investimento</h3>
                         </div>
                    </div>
                    <div className="row espaco00"></div>
                    <div className="row ">
                        <div className="col-5">
                            <div className="input-container">
                                <label>Corretora: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="corretora" id="corretora" required 
                                 onChange={(e)=> setInvestimento({...investimento, corretora: e.target.value}) }/>
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="input-container">
                                <label>Título: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="titulo" id="titulo" required 
                                onChange={(e)=> setInvestimento({...investimento, titulo: e.target.value}) }/>
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="input-container">
                                <label>Tipo do Título: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="tipo_titulo" id="tipo_titulo" required 
                                onChange={(e)=> setInvestimento({...investimento, tipo_titulo: e.target.value}) }/>
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Vencimento do título: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="vencimento_titulo" id="vencimento_titulo" required 
                                onChange={(e)=> setInvestimento({...investimento, vencimento_titulo: e.target.value}) }/>
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="input-container">
                                <label>Valor Investido: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="investido" id="investido" required 
                                onChange={(e)=> setInvestimento({...investimento, investido: e.target.value}) }/>
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="input-container margin-lr-5">
                                <label>Data de Entrada: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="data_investimento" id="data_investimento" required 
                                onChange={(e)=> setInvestimento({...investimento, data_investimento: e.target.value}) }/>
                                {renderErrorMessage("uname")}
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="input-container">
                                <label>Objetivo: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="objetivo" id="objetivo" required 
                                onChange={(e)=> setInvestimento({...investimento, objetivo: e.target.value}) }/>
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
                            <input type="submit" className="margin-lr-5 margin-t-5 botao-sub" value="Cadastrar"
                            onClick={(e)=> {e.preventDefault(); saveInvestimento()}}/>
                        </div>
                    </div>
                    </form>

    );
  }
  
  export default FormInvestimento;