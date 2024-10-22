import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';

import Inicio from './componentes/pages/Inicio';
import Servicos from './componentes/pages/Servicos';
import Portfolio from './componentes/pages/portfolio/Portfolio';
import Precos from './componentes/pages/Precos';
import Contato from './componentes/pages/Contato';
import Produtos from './componentes/pages/Produtos';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>        
        <Routes>
            <Route path="/" element={<App />} >
                <Route path="/home" element={<Inicio />} />                 
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/precos" element={<Precos />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/produtos" element={<Produtos />} />
            </Route>
        </Routes>
    </BrowserRouter>   
);
reportWebVitals();