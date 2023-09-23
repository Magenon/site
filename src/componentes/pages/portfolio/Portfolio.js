import React from 'react';
import sennda from "../../img/portfolio/logo-sennda.png"
import previne from "../../img/portfolio/logo-previne.jpg"
import magenon from "../../img/portfolio/magenon.png"

const Portfolio = props => {
    return (
        <div>
            {/* Container (Portfolio Section)*/}
            <div id="portfolio" className="container-fluid text-center bg-grey">
                <h2>Sobre nós</h2><br />
                <h1>Criamos sites incríveis para o seu negócio.</h1>
                <h3>veja alguns exemplos:</h3>
                <br></br>
                <div className="row text-center  ">
                    <div className="col-sm-4">
                        <div className="thumbnail">
                            <p><strong>Sennda</strong></p>
                            <p>Sennda Software</p>
                            <img src={sennda} alt="Brasil" width="400" height="300" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="thumbnail">
                            <p><strong>Previne</strong></p>
                            <p>Prevenção em saúde</p>
                            <img src={previne} alt="Brasil" width="400" height="300" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="thumbnail">
                            <p><strong>Magenon</strong></p>
                            <p>Tecnologia da informação</p>
                            <img src={magenon} alt="Brasil" width="400" height="300" />
                        </div>
                    </div>
                </div><br />

                <h2>O QUE NOSSOS CLIENTES DIZEM</h2>
                <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
                    {/* Indicators*/}
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    {/* Wrapper for slides*/}
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            <h4>"I am so happy with the result!"<br /><span>Michael Host, Vice President, Comment Box</span></h4>
                        </div>
                        <div className="item">
                            <h4>"One word... WOW!!"<br /><span>John Doe, Salesman, Rep Inc</span></h4>
                        </div>
                        <div className="item">
                            <h4>"Could I... BE any more happy with this company?"<br /><span>Chandler Bing, Actor, FriendsAlot</span></h4>
                        </div>
                    </div>

                    {/* Left and right controls*/}
                    <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

        </div>
    )
}
export default Portfolio;