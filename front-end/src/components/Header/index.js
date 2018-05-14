import React from 'react';

import logo from '../../images/png/BonjourAna_Blanco-01.png';

import './styles.css';

const Header = () => (
  <div className="l-welcome">
    <div className="main">
      <div className="header-logo">
        <img src={logo} alt="Company logo" />
      </div>
      <div className="header-txt">
        <h1>
          Completamos tus tareas del
          <br /> hogar y necesidades diarias.
        </h1>
      </div>
      <div className="welcome-btns">
        <a
          href="https://bonjour-ana.myshopify.com/products/servicio-de-limpieza"
          className="button-y"
        >
          Limpieza
        </a>
        <a
          href="https://bonjour-ana.myshopify.com/collections/servicio-al-hogar"
          className="button-y"
        >
          Servicios
        </a>
      </div>
    </div>
  </div>
);

export default Header;
