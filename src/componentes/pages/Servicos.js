import * as React from "react";

function Servicos () {
    return (
        <div>
            {/* Container (Services Section)*/}
            <div id="services" className="container-fluid text-center">
                <h1>Criar meu site</h1>
                <h2>O que nós oferecemos</h2>
                <br />
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-off logo-small"></span>
                        <h4>ON-LINE</h4>
                        <p>Sua empresa on-line com tecnologia de ponta.</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-user logo-small"></span>
                        <h4>CLIENTE</h4>
                        <p>A satifasção do cliente é o nosso dever.</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-stats logo-small"></span>
                        <h4>ESTATÍSTICAS DO SITE</h4>
                        <p>Monitaramos o desempenho do seu Site após a implantação.</p>
                    </div>
                </div>
                <br /><br />
                <div className="row  ">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-leaf logo-small"></span>
                        <h4>VERDE</h4>
                        <p>Contribuimos para o desenvolvimnento sustentável.</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-certificate logo-small"></span>
                        <h4>CERTIFICADA</h4>
                        <p>A Web designer Studio detém várias certificações.</p>
                    </div>
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-wrench logo-small"></span>
                        {/* eslint-disable-next-line react/style-prop-object */}
                        <h4>TRABALHO</h4>
                        <p>Desenvolvemos e trabalhamos junto ao cliente o designer e o Marketing do Site.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Servicos;