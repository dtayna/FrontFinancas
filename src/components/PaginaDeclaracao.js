import '../styles/Geral.css'
import { Impressao } from './impressao';
import React from 'react';
import { data } from './data';
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
// npm install pdfmake
export function PaginaDeclaracao() {

    const visualizarImpressao = async () => {
        const classeImpressao = new Impressao(data);
        const documento = await classeImpressao.PreparaDocumento();
        pdfMake.createPdf(documento).open({}, window.open('', '_blank'));
      }
    return (
         <div className="col-8 col-lg-10">
            <div className="row espaco0"></div>
            <div className="col-4 h-gray-1 div-titulo"></div>
                <div className="col-7 ">
                    <h3>Declaração de Imposto de Renda</h3>
                    <p>Para maiores informações sobre imposto de renda, <a href='https://www.gov.br/receitafederal/pt-br/assuntos/meu-imposto-de-renda' target="_blank">Clique aqui.</a></p>
                </div>
                <div className="row espaco0"></div>
                <div className="row espaco00"></div>
                <header className='declaracao-header'>
                    <p>
                        
                    </p>

                </header>
                <div className="row espaco00"></div>
        <div className="row espaco0"></div>
        <section className="declaracao-body">
        <button className="btn" onClick={visualizarImpressao}>
          Visualizar documento
        </button>
      </section>
          </div>
          
    );
  }
  
  export default PaginaDeclaracao;