import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import PaginaLogin from "./PaginaLogin";
import PaginaSobre from "./PaginaSobre";
import PaginaCadastro from "./PaginaCadastro";

export function MyRoutes () {
   return(
       <BrowserRouter>
           <Route component = { PaginaLogin }  path="/" exact />
           <Route component = { PaginaSobre }  path="/sobre" />
           <Route component = { PaginaCadastro }  path="/cadastro" />
       </BrowserRouter>
   )
}

export default MyRoutes;