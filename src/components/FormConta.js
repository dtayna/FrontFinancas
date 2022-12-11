import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { useEffect, useState, useContext  } from "react";
import {api} from '../server';
import { AuthContext } from '../context/auth';

export function FormConta() {
   
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) => name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
    );

    const { user } = useContext(AuthContext);

    const [conta, setConta] = useState({name:'', value:'' });

    const saveConta =  async () => {
        var contaObj = {name: conta.name, value: conta.value, user_id: user? user.id: null}
        const response = await api.post("/conta", contaObj);
        if(response.status == 200){
            console.log(response.data)
        }else{
            console.log("erro ao tentar salvar conta")
        }
    }

    //reload page
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
                            <input type="text" className="inputs-interno" name="nome" required onChange={(e) => setConta({...conta, name: e.target.value})}/>
                                {renderErrorMessage("uname")}
                    </div>
                </div>
                <div className="col-3">
                    <div className="input-container">
                        <label>Valor: </label>
                            <br></br>
                            <input type="double" className="inputs-interno" name="valor" id="valor" required onChange={(e) => setConta({...conta, value: e.target.value})} />
                            {renderErrorMessage("uname")}
                        </div>
                    </div>
                </div>   
                <br></br>
            <div className="row">
                    <div className="col-2"></div>
                    <div className="col-4">
                        <input type="reset" className="margin-lr-5 margin-t-5 botao-cancel" value="Cancelar"/>
                    </div>
                    <div className="col-4">
                        <input type="submit" className="margin-lr-5 margin-t-5 botao-sub right" value="Cadastrar" onClick={(e)=> {e.preventDefault(); saveConta()}}/>
                    </div>
            </div>    
        </form>

    );
  }
  
  export default FormConta;