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
                <h1 className="h-gray-1">Gerencie suas Finanças</h1>
                <h4 className="h-gray-2">Controle financeiro gerenciado por você!</h4>
                <p className="h-gray-2"> Para uma vida financeira organizada, é preciso ter controle da entrada e saída 
                    do dinheiro, e com isso colocamos tudo em um só lugar, fácil de usar e de entender.
                    Para utilizar basta realizar o seu cadastro e fazer o login, ao acessar terá o menu 
                    com tudo que você precisa gerenciar, em um só lugar, ganhos, gastos pontuais, contas, 
                    empréstimos, investimentos, relatórios, e ainda a emissão do imposto de renda.
                    Tudo fácil e rápido.
                   
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
  /* texto apresentando o app...
                    O conteúdo deve apresentar o produto e suas features mais relevantes;
                    Descreve-se em poucos passos o que pode ser mais relevante ao usuário saber
                    antes de entrar no app; Recursos visuais podem ser muito relevantes para apoio
                    da mensagem passada, sejam prints, fotos, ilustrações ou animações.*/
  export default PaginaSobre;
  

