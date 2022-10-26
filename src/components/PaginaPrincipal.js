import '../styles/Geral.css';
import '../styles/Principal.css';

export function PaginaPrincipal() {
    return (
      <div className="col-8 col-lg-10">
        <div className="row div-conta">
          <div className="col-2 h-gray-1">
             <h5>Saldo:</h5> 
              <h4>R$ 100,00</h4>
          </div>
          <div className="col-5">
              <form>
              <div className="row div-sel-conta">
                <div className="col-8">
              <select className="form-select" >
                <option value={1}>Conta BB</option>
                <option value={1}>Conta Nubank</option>
              </select>
              </div>
              </div>
              </form>
             
          </div>
          <div className="col-3">
            
          </div>
          <div className="col-2">
             <h4>+ nova conta</h4>
          </div>
        
        
        </div>
        <br></br>
        <br></br>
        <br></br>
          <h1>principal</h1>
          <p>
          conta: valor total; despesas totais<br></br>
          cadastro despesas/gastos; cadastro ganhos;<br></br>
           tabela ou lista de despesas;<br></br> lista ganhos;<br></br>
            
          </p>
      </div>
    );
  }
  
  export default PaginaPrincipal;