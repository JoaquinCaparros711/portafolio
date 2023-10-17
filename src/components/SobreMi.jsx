import { faBootstrap, faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useTranslation } from 'react-i18next';


export const SobreMi = () => {

  const [t] = useTranslation();


  return (
    <div className='containerAbout' id='containerAbout'>
      <h1 className='text-center mt-5 text-white'><b>{t("ABOUTME3")}</b></h1>
      <div className="containerr">
        <div className="timeline">
          <ul>
            <li className='animate__animated animate__fadeIn'>
              <div className="timeline-content">
                <h1>{t("ABOUTME")}</h1>
                <p>{t("ABOUTME2")}
                </p>
              </div>
            </li>
            <li className='animate__animated animate__fadeIn'>
              <div className="timeline-content">
                <div className='containerFrontEnd'>
                  <h1>Front End</h1>
                  <FontAwesomeIcon className='iconoFrontEnd ms-3 me-2' icon={faHtml5} />
                  <FontAwesomeIcon className='iconoFrontEnd me-2' icon={faCss3Alt} />
                  <FontAwesomeIcon className='iconoFrontEnd me-2' icon={faJs} />
                  <FontAwesomeIcon className='iconoFrontEnd me-2' icon={faReact} />
                  <FontAwesomeIcon className='iconoFrontEnd me-2' icon={faBootstrap} />
                </div>
                <p>Html + CSS + JavaScript + React.js + Bootstrap + {t("COURSE")}</p>
              </div>
            </li>
            <li className='animate__animated animate__fadeIn'>
              <div className="timeline-content">
                <h1>{t("EDUCATION")}</h1>
                <p>
                  {t("EDUCATION2")}
                </p>
              </div>
            </li>
            <li className='animate__animated animate__fadeIn'>
              <div className="timeline-content">
                <h1>Hobbies</h1>
                <p>{t("HOBBIES")}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
