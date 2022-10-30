import '../styles/Geral.css';
import FormConta from './FormConta';
import React from 'react';


export function PaginaContas() {
    return (
      <div className="col-8 col-lg-10">
        <div className="row espaco0"></div>
            <div className="row div-form-gasto ">
              <div className="col-2"></div>
              <div className="col-8 border-thin white ">
                <div className="row espaco00"></div>
                <FormConta/>
                <div className="row espaco00"></div>
              </div>
              <div className="col-2"></div>
          </div>
        <div className="row espaco0"></div>
      </div>
    );
  }
  
  export default PaginaContas;