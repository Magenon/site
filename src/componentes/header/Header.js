//import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'
import Navbar from "../../componentes/navbar/Navbar";

function Header() {
    return (
        <header className="app-header">
            <div class="">
                <li><Link className="logotipo" to="/"></Link></li>
            </div>
            <Navbar />
        </header >
    )
}
export default Header