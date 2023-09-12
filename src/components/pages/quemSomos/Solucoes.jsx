import * as React from "react";
import './Solucoes.css';
import { Par } from "../../SplashScreen.js";

// import { v4 as chave } from 'uuid';
import Licensiamento from '../../img/servicos/licensiamento.jpg';
import Fauna from '../../img/servicos/fauna.jpg';

function Solucoes() {
    return (
        <div class="">
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Resolvemos questões ambientais</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Breadcrumb --> */}
            <div class="breadcrumb">
                <div class="">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
                            <p></p>
                            <div id="crumbs">
                                {/* <a href="https://k-inf.com.br">Home</a>
                                    <span class="current">Contato</span> */}
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div class="containers">

                <Par>        

                    <div class="img">
                        <a href=""
                            class="text-decoration-none text-uppercase font-weight-bold text-center">
                            <img data-src=""
                                class="imagem-responsiva"
                                img src={Fauna}  alt="fauna" />
                            <p class="mt-3 font-weight-bolder">Fauna</p>
                        </a>
                    </div>

                    <div class="img">
                        <a href=""
                            class="text-decoration-none text-uppercase font-weight-bold text-center">
                            <img data-src="" 
                                class="imagem-responsiva"
                                src={Licensiamento} alt="licensiamento" />                            
                            <p class="mt-3 font-weight-bolder">Gestão</p>
                        </a>
                    </div>
                    
                    </Par>                    
                </div>
            </div>
        </div>
    );
};

export default Solucoes;