import '../styles/Geral.css';
import FormConta from './FormConta';
import React, {useState, useEffect, useContext, componentWillUnmount} from 'react';
import { ItemConta } from "./ItemConta";
import { api } from '../server';



class PaginaContas extends React.Component{
  constructor(props) {
    super(props)
    this.state = {contas: []};
  }



   getContas = async () => {
    let userId =  localStorage.getItem('user')
    console.log(userId)
    var contas = []
    const response = await api.get(`/conta/user/${userId}`)
    if(response.status == 200){
       contas = response.data
       this.setState({'contas': contas})
    }else{
        console.log("erro ao tentar listar constas")
    }

  }

  componentDidMount() {
    this.getContas()
    console.log(this.state.contas)
   
  }

  render(){
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
        <div className="row">
        <div className="col-2"></div>
          <div className="col-8">
            {this.state.contas.map(conta =><ItemConta conta={conta}/>)}
          </div>
        <div className="col-1"></div>
      </div>
      <div className="row espaco0"></div>
    </div>
    
  ) }
}
  
  export default PaginaContas;