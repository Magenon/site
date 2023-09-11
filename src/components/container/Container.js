import React from 'react';
import './Container.css';

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => (
  <main className="app-container">
    {children}
  </main>
);

export default Container;
