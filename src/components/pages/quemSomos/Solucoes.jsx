import * as React from 'react';
import './Solucoes.css';
import { Par } from '../../SplashScreen.js';

// import { v4 as chave } from 'uuid';
import Licensiamento from '../../img/servicos/licensiamento.jpg';
import Fauna from '../../img/servicos/fauna.jpg';

function Solucoes() {
  return (
    <div className="">
      <div className="pagina-titulo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h1>Resolvemos questões ambientais</h1>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Breadcrumb --> */}
      <div className="breadcrumb">
        <div className="">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
              <p></p>
              <div id="crumbs">
                {/* <a href="https://k-inf.com.br">Home</a>
                                    <span class="current">Contato</span> */}
              </div>
              <p></p>
            </div>
          </div>
        </div>

        <div className="containers">

          <Par>        

            <div className="img">
              <a href=""
                className="text-decoration-none text-uppercase font-weight-bold text-center">
                <img data-src=""
                  className="imagem-responsiva"
                  // eslint-disable-next-line react/no-unknown-property
                  img src={Fauna}  alt="fauna" />
                <p className="mt-3 font-weight-bolder">Fauna</p>
              </a>
            </div>

            <div className="img">
              <a href=""
                className="text-decoration-none text-uppercase font-weight-bold text-center">
                <img data-src="" 
                  className="imagem-responsiva"
                  src={Licensiamento} alt="licensiamento" />                            
                <p className="mt-3 font-weight-bolder">Gestão</p>
              </a>
            </div>
                    
          </Par>                    
        </div>
      </div>
    </div>
  );
}

export default Solucoes;
