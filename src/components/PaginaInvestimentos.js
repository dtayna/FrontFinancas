import '../styles/Geral.css';
import FormInvestimento from './FormInvestimento';
import React from 'react';
import {api}  from '../server';


const userId = localStorage.getItem('user')

class PaginaInvestimentos extends React.Component{
  constructor(props) {
    super(props)
    this.state = {investimentos: []};
  }
  
   getInvestimento = async () => {
    var investimentos = []
    const response = await api.get(`/investimentos/user/${userId}`)
    if(response.status == 200){
      investimentos = response.data
       this.setState({'investimento': investimentos})
    }else{
        console.log("erro ao tentar listar investimentos")
    }
  
  }
  
  componentDidMount() {
    this.getInvestimento()
    console.log(this.state.investimentos)
   
  }
  
  render(){
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
}
  export default PaginaInvestimentos;