import './App.css'
import React, { createContext } from 'react'
import Container from './components/container'
import Navbar from "./components/Navbar";
import Footer from './components//footer'
import { Outlet } from 'react-router-dom';
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Splash from "./components/SplashScreen";
import Global from "./components/style/Global";
import Header from './components//header'

const LightTheme = {
    pageBackground: "white",
    titleColor: "black",
    titleColorFooter: "black",
    tagLineColor: "red"
};

const DarkTheme = {
    pageBackground: "black",
    titleColor: "white",
    titleColorFooter: "white",
    tagLineColor: "lavender"
};

const themes = {
    light: LightTheme,
    dark: DarkTheme,
};

export const ThemeContext = createContext(null);

function App() {

    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <Global />
            <ThemeProvider theme={themes[theme]}>
                <div className='App' id={theme}>
                    {/* <div className='bt-toggle'>
                        <Splash theme={theme} setTheme={setTheme} />
                    </div> */}
                    <Header/>                   
                    {<Outlet />}
                    <Container>                    
                    </Container>
                    <Footer />
                </div >
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default App;