/* eslint-disable react/prop-types */
import React from 'react';

import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Toggle = styled.button`  
    background-color: transparent;
    border-radius: 5px;
    border: none;
    color: var(--text-color);
    cursor: pointer;
    display: inline-flex;
    font-size: 12px;
    font-weight: 500;
    margin: 0px;
    vertical-align: baseline;
    white-space: nowrap;
    padding: 0px;
    height: unset;
    line-height: unset;
    -webkit-box-align: center;
    align-items: center;

    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

export const ButtonCad = styled.button`
    background-color: red;
    color: white;
    font-size: 17px;

    width: 30%
    float: left

    padding-left: 10%;
    padding-right: 10%;

    padding: 10px 70px ;
    border-radius: 15px;
    transition: all .5s ease;    
    &:hover,
    &:focus{
        color: black;
    }    
`;

export const ButtonAcesso = styled.button`
    background-color: red;
    color: white;
    font-size: 20px;
    padding: 10px 50px;
    border-radius: 5px;
    margin: 10px 0px;
    cursor: pointer;    
    
    &:hover,
    &:focus{
        color: red;
        border-radius: 15px;
    }    
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;     
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;

    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`;

/* Página downloads */
export const ContainerDown = styled.nav`
    text-align: center;
`;

/* Página blog */
export const ContainerBlog = styled.nav`
    width: 100vw;
    height: 35vh;    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NavbarBlog = styled(Link)`
    color:white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
    color:  ${props => props.theme.titleColor};
    transition: all .5s ease;    
    &:hover,
    &:focus{
        color: red;
    }
    &:active{
        color: red;
}`;

export const NavbarContainer = styled.nav` 
    position: relative;
    height: 90px;
    right: -60px;
    margin: 0 auto;
    align-items: height; 
    background-color: ${props => props.theme.pageBackground};
    transition: all .5s ease;       
`;

export const NavbarLinkContainer = styled.div`
    position: relative;       
    display: flex;
    height: 90%;
    right: 6%;
    padding-right: 15%;
    padding-left: 15%;
    margin-right: auto;
    margin-left: auto;    
`;

export const NavbarLink = styled(Link)`
    color: white;
    font-size: xx-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: center;
    /*aqui mexe no alinhamentos da letras */
    margin: -0,5%; 

    color:  ${props => props.theme.titleColor};
    transition: all .5s ease;       
    &:hover,
    &:focus{
        color: green;
    }
    &:active{
        color: green;
}`;

export const Noticias_titulo = styled.h3`
    text-align: center;
`;

export const Par = styled.p`
p,
li,
input,
textarea,
select,
table,
span,
button,
a,
label,
h1,
address {
  background-color: ${props => props.theme.pageBackground};
  color:  ${props => props.theme.titleColorFooter};
}`;

export const Notices = styled.div`
noticias-data,
noticias-titulo,
noticias-resumo {
    
    color:  ${props => props.theme.titleColor};

    clear: both;
    text-align: center;
}`;

function Splash(props) {
  function changeTheme() {
    // eslint-disable-next-line react/prop-types
    if (props.theme === 'light') {
      props.setTheme('dark');
    } else {
      props.setTheme('light');
    }
  }

  const icon = props.theme === 'light' ? <HiMoon size={20} /> : <CgSun size={20} />;

  return (
    <Toggle onClick={changeTheme}>
      {icon}
    </Toggle>
  );
}

export default Splash;
