import React from 'react';

import './Blog.css';
import { Par } from '../../SplashScreen.js';
import '../../style.css';

function Blog() {
  return (
    <div className="">
      <div className="pagina-titulo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h1>Parcerias</h1>
            </div>
          </div>
        </div>
      </div>

      {/* // <!-- Breadcrumb --> */}
      <div className="breadcrumb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12">
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

      <div className="pagina-conteudo">
        <div className="container-fluid">
          <Par>
            <div className="row"></div>
            <div className="col-lg-7 col-lg-offset-1 col-md-7 col-lg-offset-1 col-sm-8">

              {/* <!-- Início do loop --> */}

              {/* <!-- Artigo 01 --> */}

              <a href="https://www.furg.br/noticias/noticias-sls/pet-gestao-ambiental-realiza-dialogos-sustentaveis-nesta-quarta-25-em-conjunto-com-o-projeto-parmis" target="_blank" rel="noreferrer">
                <article className="noticia">
                  <div className="noticias-imagem">
                    <img width="260" height="160" src="on-laptop.jpg"
                      className="attachment-artigo-listagem size-artigo-listagem wp-post-image"
                      srcSet="https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg 130w"
                      sizes="(max-width: 260px) 100vw, 260px"></img>
                    <div className="imagem-mais"></div>
                  </div>

                  <div className="noticias-titulo">
                    <h3>PET Gestão Ambiental realiza “Diálogos Sustentáveis”.</h3>
                  </div>

                  <div className="noticias-resumo">
                    <h4>PET Gestão Ambiental realiza “Diálogos Sustentáveis” nesta quarta, 25,
                                            em conjunto com o projeto Parmis. Encontro acontece a partir das 19h às 20h ...
                    </h4>
                  </div>

                  <div className="">
                    <input type="submit" className="form-newsletter-rodape-botao" value="Leia mais" name="subscribe" id="mc-embedded-subscribe" />
                  </div>
                </article>
              </a>

              <div className="quebra-linha"></div>
              <hr />

              {/* <!-- Artigo 02 --> */}

              <a href="https://www.jornalmtnorte.com.br/opiniao/o-papel-fundamental-do-ecoturismo-e-da-educacao-ambiental-em-areas-de-preservacao-permanente/23390" target="_blank" rel="noreferrer">
                <article className="noticia">
                  <div className="noticias-imagem">
                    <img width="260" height="160" src="https://sennda.com.br/wp-content/uploads/2021/08/software-260x160.jpg"
                      className="attachment-artigo-listagem size-artigo-listagem wp-post-image" alt="software de vendas" loading="lazy"
                      srcSet="https://sennda.com.br/wp-content/uploads/2021/08/software-260x160.jpg 260w, https://sennda.com.br/wp-content/uploads/2021/08/software-130x80.jpg 130w"
                      sizes="(max-width: 260px) 100vw, 260px"></img>
                    <div className="imagem-mais"></div>
                  </div>

                  <div className="noticias-titulo">
                    <h3>O papel fundamental do ecoturismo e da educação ambiental .</h3>
                  </div>

                  <div className="noticias-resumo">
                    <p>Para o menor impacto ambiental e com soluções sustentáveis,
                                            é viável a luz da biologia, da conservação e da gestão ambiental ...
                    </p>
                  </div>
                  <p></p>
                  <div className="">
                    <input type="submit" className="form-newsletter-rodape-botao" value="Leia mais" name="subscribe" id="mc-embedded-subscribe" />
                  </div>

                </article>
              </a>

              <div className="quebra-linha"></div>
              <hr />

              {/* <!-- Artigo 10 --> */}

              <div className="quebra-linha"></div><hr />
            </div>
          </Par>

          {/* <!-- Barra lateral --> */}

          <div className="col-lg-3 col-md-3 col-sm-4">
            <aside className="barra-lateral">

              <div className="barra-lateral-blog">
                <h2>Últimas notícias</h2><hr />

                {/* <!-- Artigo barra lateral 01 --> */}
                <a href=""><div className="barra-lateral-noticias-unico">
                  <div className="barral-lateral-noticias-imagem">
                    <img width="130" height="80" src="https://K-inf.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg" className="attachment-miniatura size-miniatura wp-post-image" alt="" loading="lazy" srcSet="https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-130x80.jpg 130w, https://sennda.com.br/wp-content/uploads/2022/05/close-up-pregnant-woman-typing-on-laptop-260x160.jpg 260w" sizes="(max-width: 130px) 100vw, 130px">
                    </img>
                  </div>

                  <div className="barra-lateral-noticias-texto">
                    <p>Texto:</p>
                  </div>
                </div></a>

                <div className="quebra-linha"></div>

                {/* <!-- Artigo barra lateral 02 --> */}

                <a href=""><div className="barra-lateral-noticias-unico">
                  <div className="barral-lateral-noticias-imagem">
                    <img width="130"
                      height="80"
                      src=""
                      className=""
                      alt=""
                      loading=""
                      srcSet=""
                      sizes="(max-width: 130px) 100vw, 130px">
                    </img>
                  </div>

                  <div className="barra-lateral-noticias-texto">
                    <p>Engenharia Ambiental e Sanitarista.</p>
                  </div>
                </div></a>

                <div className="quebra-linha"></div>

              </div>

              <div className="barra-lateral-categorias">
                <h3>Categorias</h3><hr />
                <ul>
                  <li className="cat-item cat-item-15"><a href="">Licenciamento</a>
                  </li>
                  <li className="cat-item cat-item-16"><a href="">Consultoria</a>
                  </li>
                  <li className="cat-item cat-item-14"><a href="">Legalização</a>
                  </li>
                </ul>
                <div className="quebra-linha"></div>
              </div>

              <div className="barra-lateral-arquivo">
                <h2>Arquivo</h2><hr />
                <ul>
                  <li>maio 2023</li>
                  <li>agosto 2022</li>
                </ul>
                <div className="quebra-linha"></div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
