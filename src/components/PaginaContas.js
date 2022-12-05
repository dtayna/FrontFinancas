import '../styles/Geral.css';
import FormConta from './FormConta';
import React from 'react';
import { ItemConta } from "./ItemConta";

export function PaginaContas({pageMenuToContas}) {

  const pageContasToForm = (token) => {
    pageMenuToContas(token)
  }

  console.log(pageMenuToContas," chegou em pg contas")
    return (
      <div className="col-8 col-lg-10">
        <div className="row espaco0"></div>
            <div className="row div-form-gasto ">
              <div className="col-2"></div>
              <div className="col-8 border-thin white ">
                <div className="row espaco00"></div>
                <FormConta pageContasToForm={pageMenuToContas}/>
                <div className="row espaco00"></div>
              </div>
              <div className="col-2"></div>
          </div>
        <div className="row">
        <div className="col-2"></div>
          <div className="col-8">
            <ItemConta/>
            <ItemConta/>
          </div>
        <div className="col-1"></div>
      </div>
      <div className="row espaco0"></div>
      </div>
      
    );
  }
  
  export default PaginaContas;