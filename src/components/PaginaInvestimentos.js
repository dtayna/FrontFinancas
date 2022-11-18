import '../styles/Geral.css';
import FormInvestimento from './FormInvestimento';
import React from 'react';

export function PaginaInvestimentos() {
    return (
         <div className="col-8 col-lg-10">
            <div className="row espaco0"></div>
              <div className="row div-form-investimento">
                <div className="col-2"></div>
                <div className="col-8 border-thin white ">
                <div className="row espaco00"></div>
                <FormInvestimento/>
                <div className="row espaco00"></div>
              </div>
              <div className="col-2"></div>
          </div>
        <div className="row espaco0"></div>
          </div>
    );
  }
  
  export default PaginaInvestimentos;