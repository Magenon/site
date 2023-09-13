import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./styles/main.css";
import { NavbarLink } from "./SplashScreen.js";
//import styled from "styled-components";  https://youtu.be/jmoCo74geJQ

function Navbar() {   

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //quando esta true lo passa a false e vice versa
        setClicked(!clicked)
    }

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <div>
            <nav ref={navRef}>
                <NavbarLink onClick={handleClick} to="/home"></NavbarLink>
                <NavbarLink to="/quemSomos">Quem Somos</NavbarLink>
                <NavbarLink to="/servicos">Serviços</NavbarLink>
                <NavbarLink to="/parcerias">Parcerias</NavbarLink>
                <NavbarLink to="/contato">Contato</NavbarLink>              
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