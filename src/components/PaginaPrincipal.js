import '../styles/Geral.css';
import '../styles/Principal.css';
import { FormGasto } from "./FormGasto";

export function PaginaPrincipal() {
    return (
      <div className="col-8 col-lg-10">

        <div className="row div-conta">
          <div className="col-4 h-gray-1 div-saldo-conta">
             <h4>Saldo: R$ 100,00</h4>
          </div>
          <div className="col-4">
          </div>
          <div className="col-4 div-sel-conta right">
          <form>
              <select className="form-select " >
                <option value={1}>Conta BB</option>
                <option value={1}>Conta Nubank</option>
              </select>
              </form>
          </div>
        </div>

        <div className="row espaco0"></div>
        <div className="row div-form-gasto ">
          <div className="col-1"></div>
          <div className="col-10 border-thin">
            <div className="row espaco00"></div>
            <FormGasto/>
            <div className="row espaco00"></div>
          </div>
          <div className="col-1"></div>
        </div>

        <br></br>
        <br></br>
        <br></br>
          <h1>principal</h1>
          <p>
          cadastro despesas/gastos; cadastro ganhos;<br></br>
           tabela ou lista de despesas;<br></br> lista ganhos;<br></br>
            
          </p>
      </div>
    );
  }
  
  export default PaginaPrincipal;