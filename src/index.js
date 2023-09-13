import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Solucoes from './components/pages/quemSomos/Solucoes';
import Downloads from './components/pages/servicos/Downloads';
import Blog from './components/pages/parcerias/Blog';
import Contato from './components/pages/contato/Contato';
import Home from './components/pages/home/Home';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/home" element={<Home />} />                
                <Route path="/quemSomos" element={<Solucoes />} />
                <Route path="/servicos" element={<Downloads />} />
                <Route path="/parcerias" element={<Blog />} />
                <Route path="/contato" element={<Contato />} />               
            </Route>
        </Routes>
    </BrowserRouter>
);

reportWebVitals();
