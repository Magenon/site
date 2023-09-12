import './Blog.css'
import { Par } from "../../SplashScreen.js";
import "../../style.css";

function Blog() {
    return (
        <div className="">
            <div class="pagina-titulo">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h1>Parcerias</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* // <!-- Breadcrumb --> */}
            <div class="breadcrumb">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
                            <p></p>
                            <div id="crumbs">
                                {/* <a href="https://k-inf.com.br">Home</a> / 
                                <span class="current">categoria "Blog"</span> */}
                            </div>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pagina-conteudo">
                <div class="container-fluid">
                    <Par>
                        <div class="row"></div>
                        <div class="col-lg-7 col-lg-offset-1 col-md-7 col-lg-offset-1 col-sm-8">

                            {/* <!-- Início do loop --> */}

                            {/* <!-- Artigo 01 --> */}
                            <a href="https://www.furg.br/noticias/noticias-sls/pet-gestao-ambiental-realiza-dialogos-sustentaveis-nesta-quarta-25-em-conjunto-com-o-projeto-parmis" target="_blank">
                                <article class="noticia">
                                    <div class="noticias-imagem">
                                        <img width="260" height="160" src="on-laptop.jpg"
                                            class="attachment-artigo-listagem size-artigo-listagem wp-post-image"
                                            srcset="https://spoilers.tv.br/wp-content/uploads/2020/03/AdobeStock_256229414.jpg"
                                            sizes="(max-width: 260px) 100vw, 260px"></img>
                                        <div class="imagem-mais"></div>
                                    </div>

                                    <div class="noticias-titulo">
                                        <h3>A K-inf realiza “Diálogos para melhorias junto ao cliente”.</h3>
                                    </div>

                                    <div class="noticias-resumo">
                                        <h4>PET Gestão Ambiental realiza “Diálogos Sustentáveis” nesta quarta, 25,
                                            em conjunto com o projeto Parmis. Encontro acontece a partir das 19h às 20h ...
                                        </h4>
                                    </div>

                                    <div className="">
                                        <input type="submit" className="form-newsletter-rodape-botao" value="Leia mais" name="subscribe" id="mc-embedded-subscribe" />
                                    </div>
                                </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />
                            {/* <!-- Artigo 02 --> */}
                            <a href="https://www.jornalmtnorte.com.br/opiniao/o-papel-fundamental-do-ecoturismo-e-da-educacao-ambiental-em-areas-de-preservacao-permanente/23390" target="_blank">
                                <article class="noticia">
                                    <div class="noticias-imagem">
                                        <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2021/08/software-260x160.jpg"
                                            class="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="software de vendas" loading="lazy"
                                            srcset="https://www.go-globe.com/wp-content/uploads/2023/09/Artificial-Intelligence-5.jpg"
                                            sizes="(max-width: 260px) 100vw, 260px"></img>
                                        <div class="imagem-mais"></div>
                                    </div>

                                    <div class="noticias-titulo">
                                        <h3>O papel fundamental da tecnologia e educação digital .</h3>
                                    </div>

                                    <div class="noticias-resumo">
                                        <p>Para o melhor aproveitamento de soluções atuais,
                                            e viável a todo tipo de gosto, da segurança a implantação ...
                                        </p>
                                    </div>
                                    <p></p>
                                    <div className="">
                                        <input type="submit" className="form-newsletter-rodape-botao" value="Leia mais" name="subscribe" id="mc-embedded-subscribe" />
                                    </div>
                                </article>
                            </a>

                            <div class="quebra-linha"></div>
                            <hr />
                            {/* <!-- Artigo 10 --> */}
                            <div class="quebra-linha"></div><hr />
                        </div>
                    </Par>

                    {/* <!-- Barra lateral --> */}

                    <div class="col-lg-3 col-md-3 col-sm-4">
                        <aside class="barra-lateral">

                            <div class="barra-lateral-blog">
                                <h2>Últimas notícias</h2><hr />

                                {/* <!-- Artigo barra lateral 01 --> */}
                                <a href=""><div class="barra-lateral-noticias-unico">
                                    <div class="barral-lateral-noticias-imagem">
                                        <img width="130" height="80" src="https://K-inf.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg" class="attachment-miniatura size-miniatura wp-post-image" alt="" loading="lazy" srcset="https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg 130w, https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-260x160.jpg 260w" sizes="(max-width: 130px) 100vw, 130px">
                                        </img>
                                    </div>

                                    <div class="barra-lateral-noticias-texto">
                                        <p>Texto:</p>
                                    </div>
                                </div></a>

                                <div class="quebra-linha"></div>

                                {/* <!-- Artigo barra lateral 02 --> */}

                                <a href=""><div class="barra-lateral-noticias-unico">
                                    <div class="barral-lateral-noticias-imagem">
                                        <img width="130"
                                            height="80"
                                            src=""
                                            class=""
                                            alt=""
                                            loading=""
                                            srcset=""
                                            sizes="(max-width: 130px) 100vw, 130px">
                                        </img>
                                    </div>

                                    <div class="barra-lateral-noticias-texto">
                                        <p>Engenharia Ambiental e Sanitarista.</p>
                                    </div>
                                </div></a>

                                <div class="quebra-linha"></div>

                            </div>

                            <div class="barra-lateral-categorias">
                                <h3>Categorias</h3><hr />
                                <ul>
                                    <li class="cat-item cat-item-15"><a href="">Licenciamento</a>
                                    </li>
                                    <li class="cat-item cat-item-16"><a href="">Consultoria</a>
                                    </li>
                                    <li class="cat-item cat-item-14"><a href="">Legalização</a>
                                    </li>
                                </ul>
                                <div class="quebra-linha"></div>
                            </div>

                            <div class="barra-lateral-arquivo">
                                <h2>Arquivo</h2><hr />
                                <ul>
                                    <li>maio 2023</li>
                                    <li>agosto 2022</li>
                                </ul>
                                <div class="quebra-linha"></div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Blog;