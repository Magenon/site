import './App.css';
import React, { createContext } from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Global from './components/style/Global';

import Navbar from "./components/Navbar/Navbar";
import BasicSlider from "./components/BasicSlider";
import Footer from './components//footer';

const LightTheme = {
  pageBackground: 'white',
  titleColor: 'black',
  titleColorFooter: 'black',
  tagLineColor: 'red'
};

const DarkTheme = {
  pageBackground: 'black',
  titleColor: 'white',
  titleColorFooter: 'white',
  tagLineColor: 'lavender'
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

export const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Global />
      <ThemeProvider theme={themes[theme]}>
        <div className="App" id={theme}>
          <Navbar />
          {<Outlet />}
          <BasicSlider />
          <Footer />
        </div >
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
export default App;