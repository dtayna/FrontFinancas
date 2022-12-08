import '../styles/Geral.css';
import React from 'react';
import { FormEmprestimo } from './FormEmprestimo';

export function PaginaEmprestimo() {
    return (
         <div className="col-8 col-lg-10">
            <div className="row espaco0"></div>
              <div className="row div-form-emprestimo">
                <div className="col-2"></div>
                <div className="col-8 border-thin white ">
                <div className="row espaco00"></div>
                <FormEmprestimo/>
                <div className="row espaco00"></div>
              </div>
              <div className="col-2"></div>
          </div>
        <div className="row espaco0"></div>
          </div>
    );
  }
  
  export default PaginaEmprestimo;