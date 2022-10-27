import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { FormGasto } from "./FormGasto";
import { FormGanho } from "./FormGanho";


export function PaginaPrincipal() {

  //Mudança de Conta na tela principal

  const saldos = [100.00, 200.00, 300.00];
  const contas = [0, 1, 2];

  const [activeConta, setActiveConta] = useState(0);
  const [saldo, setSaldo] = useState(100.00);


  const mudarConta = () => {
    setActiveConta();
    setSaldo(200.00);
  };

  //Tab para formularios de Ganho/Gasto

  const [activeTab, setActiveTab] = useState("gastos");

  const tabinativa =  "col-2 center border-t-radius color-blue h-white";
  const  tabativa = "border-tlr-thin-radius col-2 center border-t-radius z-index-sup white h-blue";

  const gastosTab = () => {
    setActiveTab("gastos");
  };

  const ganhosTab = () => {
    setActiveTab("ganhos");
  };

  // TELA PRINCIPAL 

    return (
      <div className="col-8 col-lg-10">

        <div className="row div-conta">
          <div className="col-4 h-gray-1 div-saldo-conta">
             <h4>Saldo: R$ {saldo}</h4>
          </div>
          <div className="col-4">
          </div>
          <div className="col-4 div-sel-conta right">
          <form>
              <select className="form-select" onChange={mudarConta} name="conta">
                <option value={contas[0]}>Conta BB</option>
                <option value={contas[1]}>Conta Nubank</option>
              </select>
              </form>
          </div>
        </div>

        <div className="row espaco0"></div>
        <div className="row">
          <div className="col-7"></div>
          <div onClick={gastosTab} className={activeTab === "gastos" ? tabativa : tabinativa}> 
            <h3>Gasto</h3>
          </div>
          <div onClick={ganhosTab} className={activeTab === "gastos" ? tabinativa : tabativa}> 
             <h3>Ganho</h3>
          </div>
        </div>
        <div className="row div-form-gasto ">
          <div className="col-1"></div>
          <div className="col-10 border-thin white ">
            <div className="row espaco00"></div>
            {activeTab === "gastos" ? <FormGasto /> : <FormGanho />}
            <div className="row espaco00"></div>
          </div>
          <div className="col-1"></div>
        </div>

        <br></br>
        <br></br>
        <br></br>
          <h1>principal</h1>
          <p>
           tabela ou lista de despesas;<br></br> lista ganhos;<br></br>
            
          </p>
      </div>
    );
  }
  
  export default PaginaPrincipal;