import '../styles/Geral.css';
import React from 'react';
import { FormEmprestimo } from './FormEmprestimo';
import {api}  from '../server';

const userId = localStorage.getItem('user')

class PaginaEmprestimo extends React.Component{
  constructor(props) {
  super(props)
  this.state = {loans: []};
}

 getLoan = async () => {
  var loans = []
  const response = await api.get(`/emprestimo/user/${userId}`)
  if(response.status == 200){
     loans = response.data
     this.setState({'emprestimos': loans})
  }else{
      console.log("erro ao tentar listar empréstimos")
  }

}

componentDidMount() {
  this.getLoan()
  console.log(this.state.loans)
 
}

render(){
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
}
  export default PaginaEmprestimo;