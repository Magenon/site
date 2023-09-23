/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div>
      <nav className="navbar">        
        <Link to="/" className="logotipo"></Link>
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="home">Inicio</Link>
          <Link to="/servicos" className="servicos">Serviços</Link>
          <Link to="/portfolio" className="about">Sobre nós</Link>
          <Link to="/precos" className="about">Preços</Link>
          <Link to="/contato" className="contato">Contato</Link>
        </ul>
        <button className="mobile-menu-icon"
          onClick={() => setIsMobile(!isMobile)}
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>
      </nav>
    </div>
  );
}
export default Navbar;