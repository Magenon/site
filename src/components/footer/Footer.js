import React from 'react'
import { Link } from "react-router-dom";
import './Footer.css'
import '../style.css'
import { FaPhone, FaWhatsapp, FaEnvelope, FaUserAlt } from 'react-icons/fa';

const Footer = () => (

    <footer className="rodape">
        <div className="container" />
        <div className="row" />

        <div className="rodape-assinatura">
            <div className="rodape-contatos">
                <i className="FaUserAlt" aria-hidden="true"></i> <FaUserAlt /><br></br>K-inf<p></p>Software<br></br><p></p>
            </div>
        </div>

        <div className="col-lg-3 col-md-3 col-sm-3">
            <div className="">
                <div>
                    <li className=''><Link className="rodape-logo" to="/"></Link></li>
                    <a id="link-top" href="#">&#9650;</a>
                </div>
            </div>
        </div>

        {/* ====================================================================================================== */}

        {/* <Par> */}

        <div className="col-lg-2 col-md-2 col-sm-2">
            <div className="rodape-contatos">
                <p><i className="FaWhatsapp" aria-hidden="true"></i> <FaPhone /> (00) 0000-0000<br></br><p></p>
                    <i className="FaWhatsapp" aria-hidden="true"></i> <FaWhatsapp /> (00) 00000-0000<br></br><p></p>
                    <i className="FaWhatsapp" aria-hidden="true"></i> <FaWhatsapp /> (00) 00000-0000<br></br><p></p>
                    <i className="bi bi-telephone" aria-hidden="true"> </i>
                    <i className="FaEnvelope" href="https://www.google.com/intl/pt/gmail/about/"
                        target="_blank">
                        <FaEnvelope />nocpolaco@gmail.com
                    </i>
                </p>
            </div>
        </div>

        {/* ====================================================================================================== */}

        <div className="col-lg-2 col-md-2 col-sm-2"> {/* nessa classe está aparecendo um ponto na tela  */}
            <ul className="">
                <li id="" class="">
                    <p>  </p>
                    {/*<a className="rodape-menu" href="">Seja um colaborador</a>*/}
                </li>
            </ul>
        </div>

        {/* ====================================================================================================== */}

        <div className="col-lg-5 col-md-5 col-sm-5">
            <div className="rodape-newsletter">
                <p>Receba informações úteis :
                </p>

                <form action="//sennda.us13.list-manage.com/subscribe/post?u=3af511874523d3cfc6600f611&amp;id=0e6c788aa6"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate >
                    <input type="text" className="form-newsletter-rodape" placeholder="Nome" name="FNAME" id="mce-FNAME" required />
                    <input type="email" className="form-newsletter-rodape" placeholder="E-mail" name="EMAIL" id="mce-EMAIL" required />

                    <input type="submit" className="form-newsletter-rodape-botao" value="Assinar" name="subscribe" id="mc-embedded-subscribe" />

                    <div id="mce-responses" className="clear">
                        <div className="response" id="mce-error-response"></div>
                        <div className="response" id="mce-success-response"></div>
                    </div>
                </form>

            </div>
            <div className="row">
                <div className="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                    <div className="quebra-linha"></div>
                </div>
            </div>
        </div>

        <div>
            <p>&nbsp;</p>
        </div>

        <div className="">
            <div class="rodape-assinatura">
                <p class="text-center">2023 © K-inf Software - Todos os direitos reservados. Desenvolvido por -&nbsp;
                    <a className="rodape-menu" href="" target="">K-inf</a>
                </p>
            </div>
        </div>

        {/* </Par> */}

    </footer >
)

export default Footer