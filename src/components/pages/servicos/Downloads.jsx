/* eslint-disable react/no-unknown-property */
import * as React from 'react';
//import { faidcard, FaCloudDownloadAlt, FaFileArchive } from 'react-icons/fa';
//import { Par, NavbarLink, ContainerDown } from "../../SplashScreen.js";
import { Par } from '../../SplashScreen.js';

//import Img from 'react-image'
import Licensiamento from '../../img/servicos/licensiamento.jpg';
import Fauna from '../../img/servicos/fauna.jpg';


function Downloads() {
  return (
    <div className="">
      <div className="pagina-titulo">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <h1>Consultoria Ambiental</h1>
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
      <Par>
        <div className="">
          <ul className="nav navbar-nav">
            <li className="nav-item">

              <a className="nav-link" aria-current="page" href="" target="blank">
                                Auditoria Ambiental &nbsp; <fa fa-id-card /> </a>
            </li>
            <li className="nav-item">
              <img src={Licensiamento} alt="licensiamento" />
              <a className="nav-link" href="" target="blank">
                                Licenciamento Ambiental &nbsp; <fa-id-card /> </a>
            </li>
            <li className="nav-item">
              <img src={Fauna} alt="fauna" />
              <a className="nav-link" href="" target="blank">
                                Fauna &nbsp;<fa fa-id-card /></a>
            </li>
            <li className="nav-item">
              {/* <img src={Fauna} alt="fauna" /> */}
              <a className="nav-link" href="/C:\REACT-STATE\react-state\src\components\pages\servicos\Orcamento.html" target="blank">
                                Serviços &nbsp;<fa fa-id-card /></a>
            </li>
          </ul>
        </div>
      </Par>
      {/* <NavbarLink class="nav-link" to="www.google.com" target="">
                    Teamviewer &nbsp; <FaDownload />

                </NavbarLink>                           */}


    </div>
  );
}

export default Downloads;
