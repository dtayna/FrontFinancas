import '../styles/Geral.css';
import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import { MenuExterno } from './MenuExterno';
import { PaginaLogin } from './PaginaLogin';
import { Rodape } from './Rodape';

export function PaginaExterna() {

    return (
      <div>
        <MenuExterno/>
        <Rodape/>
      </div>
    );
  }
  
  export default PaginaLogin;