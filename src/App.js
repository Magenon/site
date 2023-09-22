import { Outlet } from 'react-router-dom';
import Navbar from './componentes/navbar/Navbar';
import BasicSlider from './componentes/BasicSlider';
import Footer from './componentes/pages/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* outlet faz a mágica das rotas */}
      {<Outlet />}
      <BasicSlider />           
      <Footer />
    </div>
  );
}
export default App;