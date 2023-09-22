import React from 'react';

const Precos = props => {
    return (
        <div>
            {/* Container (Pricing Section)*/}
            <div id="precos" className="container-fluid">
                <div className="text-center">
                    <h2>Preços</h2>
                    <h4>Escolha um plano de pagamento que funcione para você</h4>
                </div>
                <div className="row  ">
                    <div className="col-sm-4 col-xs-12">
                        <div className="panel panel-default text-center">
                            <div className="panel-heading">
                                <h1>Basico</h1>
                            </div>
                            <div className="panel-body">
                                <p><strong>1 &nbsp;</strong>-&nbsp; Site</p>
                                <p><strong>1 &nbsp;</strong>-&nbsp; Domínio</p>
                                <p><strong></strong> Hospedagem</p>
                                <p><strong>Suporte &nbsp;</strong>horário comercial</p>
                                <p><strong>&nbsp;</strong></p>
                                <p><strong>&nbsp;</strong></p>
                                <p><strong>&nbsp;</strong></p>   
                                <p><strong>&nbsp;</strong></p>                      
                            </div>
                            <div className="panel-footer">
                                <h3>R$50,00</h3>
                                <h4>por mês</h4>
                                <button className="btn btn-lg">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-4 col-xs-12">
                        <div className="panel panel-default text-center">
                            <div className="panel-heading">
                                <h1>Premium</h1>
                            </div>
                            <div className="panel-body">
                                <p><strong>1 &nbsp;</strong>-&nbsp; Site</p>
                                <p><strong>1 &nbsp;</strong>-&nbsp; Domínio</p>
                                <p><strong></strong> Hospedagem</p>
                                <p><strong>SSL</strong> </p>
                                <p><strong>Suporte</strong> 24 hrs</p>
                                <p><strong>&nbsp;</strong></p>
                                <p><strong>&nbsp;</strong></p>
                                <p><strong>&nbsp;</strong></p>
                            </div>
                            <div className="panel-footer">
                                <h3>R$1.400,00</h3>
                                <h4>válido por um ano</h4>
                                <button className="btn btn-lg">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-xs-12">
                        <div className="panel panel-default text-center">
                            <div className="panel-heading">
                                <h1>Pro</h1>
                            </div>
                            <div className="panel-body">
                                <p><strong>1 &nbsp;</strong>-&nbsp; Site</p>
                                <p><strong>1 &nbsp;</strong>-&nbsp; Domínio</p>
                                <p><strong></strong> Hospedagem</p>
                                <p><strong>SSL</strong> </p>
                                <p><strong>E-mail</strong>  </p>
                                <p><strong>Práticas de SEO</strong></p>
                                <p><strong>Suporte</strong> 24 hrs</p>
                                <p><strong>Largura de Banda Ilimitada</strong></p>
                            </div>
                            <div className="panel-footer">
                                <h3>R$1.899,00</h3>
                                <h4>válido por dois anos</h4>
                                <button className="btn btn-lg">Sign Up</button>
                            </div>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>
    )
}
export default Precos;