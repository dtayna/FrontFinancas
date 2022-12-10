import '../styles/Geral.css';
import '../styles/Principal.css';
import React, { ReactNode, useState } from "react";
import editarIcon from '../images/editarIcon.png';
import removerIcon from '../images/removerIcon.png';
import { api } from '../server';


export function ItemConta({conta}) {

    const update = async () =>{
        console.log("update")
    }

    const remove = async () => {
        console.log(conta)
        const response = await api.delete(`/conta/${conta.id}`)
        console.log(response)
    }

    console.log(conta)


    return (
        <div className="row border-thin margin-t-5"> 
        <div className="col-12">
            <div className="row border-b-thin margin-t-5"> 
                <div className="col-10"> <h4> Conta {conta.name} </h4> </div>
                <div className="col-1">  <img className="right" width="30px" height="30px" src={editarIcon} onClick={()=> update()}></img> </div>
                <div className="col-1"> <img className="right"  width="30px" height="30px" src={removerIcon} onClick={() => remove()}></img> </div>
            </div>
            <div className="row padding-top-1"> 
                <div className="col-sm-7 col-12"> <h5 > Saldo: {conta.value}  </h5> </div>
            </div>
        </div>
        </div>
    );
  }
  
  export default ItemConta;