import React, { useState } from "react";
import { BrowserRouter as Router, Route , Routes, Navigate } from "react-router-dom";
import PaginaPrincipal from "../components/PaginaPrincipal";
import { PaginaExterna } from "../components/PaginaExterna";
import { PaginaInterna } from "../components/PaginaInterna";

export function RoutesApp() {
  
  const [page, setPage] = useState('externa');
  const [logado, setLogado] = useState('externa');

  const pageExternaToRoutes = (token) => {
      pageRoutesToInterna(token)
  }

  const pageRoutesToInterna = (token) => {
     setPage(token);
  }
  
  return(

    <div>
      {page === "externa" ? <PaginaExterna pageExternaToRoutes={pageExternaToRoutes} /> : <PaginaInterna pageRoutesToInterna={page}/>}
    </div>
    
   )

}

export default RoutesApp;