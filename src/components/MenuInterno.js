import React, { ReactNode, useState } from "react";
import { isDOMComponent } from "react-dom/test-utils";
import { useForm } from "react-hook-form";
import './Menu.css';

export function MenuInterno() {
    return(
      <div className="menu-style">
        <div className="menu-item left" onclick="">
          Menu1
        </div>
        <div className="menu-item left" onclick="">
          Menu2
        </div>
        <div className="menu-item right" onclick="">
          Perfil
        </div>
      </div>
    );
    };
  export default MenuInterno;