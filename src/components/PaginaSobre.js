import '../styles/Geral.css';
import { MenuExterno } from './MenuExterno';
import { Rodape } from './Rodape';
import sobre1 from '../images/sobre1.jpg';
import React from 'react';

export function PaginaSobre() {
    return (
      <div>
          <div className="row espaco2">
              <br></br>
          </div>
          <div className="conteudo row">
            <div className="col-1 espaco1"></div>
            <img className="col-5" src={sobre1}></img>
            <div className="col-1 espaco1"></div>
            <div className="col-4 espaco1">
                <h1 className="h-gray-1">Gerencie suas Finanças!</h1>
                <h4 className="h-gray-2">slogan blablabla</h4>
                <p className="h-gray-2"> texto apresentando o app...
                    O conteúdo deve apresentar o produto e suas features mais relevantes;
                    Descreve-se em poucos passos o que pode ser mais relevante ao usuário saber
                    antes de entrar no app; Recursos visuais podem ser muito relevantes para apoio
                    da mensagem passada, sejam prints, fotos, ilustrações ou animações.
                </p>
            </div>
            <div className="col-1 espaco1"></div>
            </div>
            <div className="row espaco3">
                <br></br>
            </div>
      </div>
    );
  }
  
  export default PaginaSobre;
  

