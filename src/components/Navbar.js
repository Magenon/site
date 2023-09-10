import React from 'react';

import { useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './styles/main.css';
import { NavbarLink } from './SplashScreen.js';

function Navbar() {   

  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <div>
      <nav ref={navRef}>
        <NavbarLink onClick={handleClick} to="/home">Home</NavbarLink>
        <NavbarLink to="/quemSomos">Quem Somos</NavbarLink>
        <NavbarLink to="/servicos">Serviços</NavbarLink>
        <NavbarLink to="/parcerias">Parcerias</NavbarLink>
        <NavbarLink to="/contato">Contato</NavbarLink>

        <NavbarLink to="/robo">Robo</NavbarLink>

        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>                    
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </div>
  );
}

export default Navbar;
