import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navbar from '../../components/Navbar';

function Header() {
  return (
    <header className="app-header">
      <div className="">
        <li><Link className="logo" to="/"></Link></li>
      </div>
      <Navbar/>
    </header >
  );
}
export default Header;
