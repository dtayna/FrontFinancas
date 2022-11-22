import React from "react";
import {  Router, Route , Routes, Navigate } from "react-router-dom";
import PaginaPrincipal from "../components/PaginaPrincipal";
import { PaginaExterna } from "../components/PaginaExterna";

export function RoutesApp() {
   return(
      <Router>
        <Routes>
          <Route path="/" element={<PaginaExterna />} />
        </Routes>
      </Router>
   )

}

export default RoutesApp;