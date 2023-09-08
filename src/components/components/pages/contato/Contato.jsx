import * as React from "react";
import './Contato.css'
import { Par } from "../../SplashScreen.js";
// import MediaQuery from 'react-responsive'

function Contato() {
    return (
        <div>
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Entre em contato agora</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Breadcrumb --> */}
            <div class="breadcrumb">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
                            <p></p>
                            <div id="crumbs">
                                {/* <a href="https://sennda.com.br">Home</a>
                                <span class="current">Contato</span> */}
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div >

            <div className="pagina-conteudo">
                <div class="container">

                    <Par>

                        {/* <div className="row"> */}
                        <div className="col-lg-5 col-lg-offset-1 col-md-5 col-md-offset-1 col-sm-6">
                            <article className="pagina-artigo">
                                <div className="pagina-contato-texto">
                                    <p>A EKO serviços ambientais, tem mais de 8 anos de experiência no mercado,
                                        além de uma atuação expressiva na área de gestão ambiental , licenciamneto e todo suporte técnico.
                                        <br></br>
                                        <br></br>
                                    </p>
                                    Endereço :
                                    <br></br>
                                    <br></br>
                                    Av Feliciano Sodré, 864 – Várzea - Loja 120 – Centro – Teresópolis – RJ

                                    <br></br>
                                    <p>CEP: 25953-007</p>
                                    <p>
                                        <p> Telefones: </p>
                                        (21) 3-726-1198
                                        <br></br>
                                        (21) 9-9159-0684
                                        <br></br>
                                        (21) 9-7121-7439
                                        <br></br>
                                        <br></br>
                                        e-mail: ekoservicosambientais@gmail.com
                                    </p>
                                    {/* <!-- Fim do loop --> */}
                                </div>
                            </article>
                        </div>

                    </Par>

                    {/* <!-- Barra lateral --> */}
                    <div class="col-lg-5 col-md-5 col-sm-6">
                        <div class="contato-formulario">
                            <Par><p>Ou entre em contato através do formulário de contato abaixo:</p>
                            </Par>
                            <hr></hr>
                            <div role="form" class="wpcf7" id="wpcf7-f4-o1" lang="pt-BR" dir="ltr">
                                <div class="screen-reader-response">
                                    <p role="status" aria-live="polite" aria-atomic="true"></p>
                                    <ul></ul>
                                </div>
                                <form action="/contato#wpcf7-f4-o1" method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">
                                    <div class="display: none;">
                                        <input type="hidden" name="_wpcf7" value="4" />
                                        <input type="hidden" name="_wpcf7_version" value="5.5.6.1" />
                                        <input type="hidden" name="_wpcf7_locale" value="pt_BR" />
                                        <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f4-o1" />
                                        <input type="hidden" name="_wpcf7_container_post" value="0" />
                                        <input type="hidden" name="_wpcf7_posted_data_hash" value />
                                        <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
                                    </div>
                                    <Par>
                                        <div class="form-container">
                                            <label for="contato-nome">Nome:</label>
                                            <span class="wpcf7-form-control-wrap text-1">
                                                <input type="text" name="text-1" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-contato"
                                                    id="contato-nome" aria-required="true" aria-invalid="false" placeholder="Nome Completo" />
                                            </span>
                                        </div>

                                        <div class="form-container">
                                            <label for="contato-email">E-mail:</label>
                                            <span class="wpcf7-form-control-wrap email-2">
                                                <input type="email" name="email-2" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-contato"
                                                    id="contato-email" aria-required="true" aria-invalid="false" placeholder="Seu melhor e-mail" />
                                            </span>
                                        </div>

                                        <div class="form-container">
                                            <label for="contato-telefone">Telefone:</label>
                                            <span class="wpcf7-form-control-wrap tel-3"><input type="tel" name="tel-3" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel form-contato mascara-tel"
                                                id="contato-telefone" aria-invalid="false" placeholder="Seu telefone de contato" />
                                            </span>
                                        </div>

                                        <div class="form-container">
                                            <label for="contato-assunto">Assunto:</label>
                                            <span class="wpcf7-form-control-wrap text-4"><input type="text" name="text-4" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-contato"
                                                id="contato-assunto" aria-required="true" aria-invalid="false" placeholder="Assunto da mensagem" />
                                            </span>
                                        </div>

                                        <div class="form-container">
                                            <label for="contato-mensagem">Mensagem:</label>
                                            <span class="wpcf7-form-control-wrap textarea-5"><textarea name="textarea-5" cols="40" rows="10" maxlength="400" class="wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required form-contato"
                                                id="contato-mensagem" aria-required="true" aria-invalid="false" placeholder="Mensagem (Máximo de 400 caracateres)">
                                            </textarea>
                                            </span>
                                        </div>

                                    </Par>

                                    <input type="submit" value="Enviar mensagem" class="wpcf7-form-control has-spinner wpcf7-submit form-contato-botao botao-verde"></input>

                                    <span class="wpcf7-spinner"></span>

                                    {/* <div class="wpcf7-response-output" aria-hidden="true"></div> */}
                                </form>
                            </div >
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
};

export default Contato;