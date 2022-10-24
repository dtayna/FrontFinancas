import '../styles/Geral.css';
import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { MenuInterno } from './MenuInterno';
import { PaginaPrincipal } from './PaginaPrincipal';
import { Rodape } from './Rodape';

export function PaginaInterna() {

    return (
      <div>
        <MenuInterno/>
        <Rodape/>
      </div>
    );
  }
  
  export default PaginaInterna;