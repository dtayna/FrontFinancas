import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { useEffect, useState, useContext } from "react";
import {api} from '../server';
import { AuthContext } from '../context/auth';

export function FormEmprestimo() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const renderErrorMessage = (name) => name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );
    
        const { user } = useContext(AuthContext);
    
        const [loan, setLoan] = useState({valor_pagar:'', data_final:'', tipo_juros:'', juros:'',
                                          value:'', descricao:'', data_recebimento:''});
    
        const saveLoan =  async () => {
            var loanObj = {valor_pagar: loan.valor_pagar, data_final: loan.data_final, tipo_juros: loan.tipo_juros,
                           juros: loan.juros, value: loan.value, descricao: loan.descricao, data_recebimento: loan.data_recebimento,
                           user_id: user? user.id: null}
            const response = await api.post("/emprestimo", loanObj);
            if(response.status == 200){
                console.log(response.data)
            }else{
                console.log("erro ao tentar salvar empréstimo")
            }
        }

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
                                <input type="text" className="inputs-interno" name="descricao" onChange={(e) => setLoan({...loan, descricao: e.target.value})}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Valor: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="valor" id="valor" onChange={(e) => setLoan({...loan, value: e.target.value})}/>
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
                                <input type="text" className="inputs-interno" name="valor_pagar" id="valor_pagar" onChange={(e) => setLoan({...loan, valor_pagar: e.target.value})}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Tipo juros: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="tipo_juros" id="tipo_juros" onChange={(e) => setLoan({...loan, tipo_juros: e.target.value})}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Juros: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="juros" id="juros" onChange={(e) => setLoan({...loan, juros: e.target.value})}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Data de entrada: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="data_entrada" id="data_entrada" onChange={(e) => setLoan({...loan, data_recebimento: e.target.value})}/>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="input-container">
                                <label>Data de vencimento: </label>
                                <br></br>
                                <input type="text" className="inputs-interno" name="data_vencimento" id="data_vencimento" onChange={(e) => setLoan({...loan, data_final: e.target.value})}/>
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
                            <input type="submit" className="margin-lr-5 margin-t-5 botao-sub right" value="Cadastrar" onClick={(e)=> {e.preventDefault(); saveLoan()}}/>
                        </div>
                    </div>
                    </form>

    );
  }
  
  export default FormEmprestimo;