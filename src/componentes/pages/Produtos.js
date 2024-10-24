import React from 'react';
import produtos from "../img/produtos/Capa.jpg"

const Precos = props => {
    return (
        <div>
            {/* Container (Pricing Section)*/}
            <div id="precos" className="container-fluid">
                <div className="text-center">
                    <h1>Biblioteca On-Line</h1>
                    <h4>Escolha seu produto e faça sua compra com total segurança.</h4>
                </div>                                  

                    <div className="col-sm-4 col-xs-12">
                        <div className="panel panel-default text-center">
                            <div className="panel-heading">
                                <h1>Livro Digital</h1>
                            </div>
                            <div className="panel-body">
                                <img src={produtos} alt="Brasil" width="250" height="300"/>
                                {/* <p><strong>1 &nbsp;</strong>-&nbsp; produto</p> */}
                                <p><strong>Link Oficial</strong> </p>                                
                            </div>
                            <div className="panel-footer">
                                <h3>R$59,97</h3>
                                <h2>Entrega garantida</h2>
                                <a href="https://amzn.to/3U0cYzu" target="_blank" rel="noreferrer" className="btn btn-lg">Quero</a>                                                          
                            </div>
                        </div>
                    </div>         

                </div>
            </div>                
    )
}
export default Precos;