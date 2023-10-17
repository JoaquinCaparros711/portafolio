import React from 'react';
import { faCircleUser, faEnvelope, faEye } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCode, faHouse, faLanguage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


export const NavBar = () => {

    const [t, i18n] = useTranslation();

    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container-fluid">
                <h1 className=" ms-4 jc">Caparros<b>.dev</b></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon className="navbar-toggler-icon bars" icon={faBars} />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li className='nav-item nav-link ms-4'>
                            <FontAwesomeIcon className='iconNavBar me-2' icon={faHouse} />
                            <a href="#containerInicio">{t('START')}</a>
                        </li>
                        <li className='nav-item nav-link ms-4'>
                            <FontAwesomeIcon className='iconNavBar me-2' icon={faCircleUser} />
                            <a href="#containerAbout">{t('ABOUT')}</a>
                        </li>
                        <li className='nav-item nav-link ms-4'>
                            <FontAwesomeIcon className='iconNavBar me-2' icon={faEye} />
                            <a href="#misProyectos">{t('PROJECTS')}</a>
                        </li>
                        <li className='nav-item nav-link ms-4'>
                            <FontAwesomeIcon className='iconNavBar me-2' icon={faCode} />
                            <a href="#containerHabilidades">{t('SKILLS')}</a>
                        </li>
                        <li className='nav-item nav-link ms-4'>
                            <FontAwesomeIcon className='iconNavBar me-2' icon={faEnvelope} />
                            <a href="#form-container">{t('CONTACT')}</a>
                        </li>

                        <li className="nav-item dropdown ms-4 me-4">
                            <FontAwesomeIcon className='iconNavBar language' icon={faLanguage} />
                            <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {t('LANGUAGE')}
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item text-black" href="#" onClick={() => i18n.changeLanguage("es")}>{t('ES')}</a></li>
                                <li><a className="dropdown-item text-black" href="#" onClick={() => i18n.changeLanguage("en")}>{t('EN')}</a></li>
                            </ul>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}
