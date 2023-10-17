import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';
import fotoMia from '../img/FotoMia.jpeg';






export const Inicio = () => {

  const [t] = useTranslation();
  
  return (
    <div className="containerInicio" id="containerInicio">
      <div>
        <div className="row align-items-center columnasInicio row">
          <div className="columna1 col">
            <h3 className="fs-2">{t("HELLO")}</h3>
            <div>
                
              <h1 className="fs-1">
                <b className="soy">
                  {t("IM")} <b className="joaquin">Joaquín Caparros</b>
                </b>
              </h1>
            </div>
            <p className="fs-4 parrafoSobreMi">
              {t("PARAGRAPHABOUT")} <b>{t("ING")}</b>.
              <br />
                {t("PROFESIONAL")} <b>{t("DESIGN")}</b>,
                {t("ENGAGED")} <b>{t("EXCELLENCE")}</b> {t("AND")} <b>{t("INNOVATION")}</b>{t("PLACE")}
            </p>
            <div className="containerIconInicio">
              <a href="https://www.linkedin.com/in/joaquin-caparros-0399a6239/">
                <FontAwesomeIcon className="iconosRedes" icon={faLinkedin} />
              </a>
              <a href="https://www.instagram.com/joaquincaparross/">
                <FontAwesomeIcon className="iconosRedes" icon={faInstagram} />
              </a>
              <a href="https://github.com/JoaquinCaparros711">
                <FontAwesomeIcon className="iconosRedes" icon={faGithub} />
              </a>
            </div>
          </div>

          <div className="col containerImgFotoMia">
            <img src={fotoMia} className="fotoMia" />
          </div>
        </div>
      </div>
    </div>
  );
};
