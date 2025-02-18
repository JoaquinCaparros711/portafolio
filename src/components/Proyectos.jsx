import React from 'react';
import aluminumMold from '../img/aluminumMold.png';
import appGenerator from '../img/appGenerator.png';
import gifApp from '../img/gifApp.png';
import mercadoLiebre from '../img/mercadoLiebre.png';
import RickAndMorty from '../img/RickAndMorty.png';
import { useTranslation } from 'react-i18next';




  
export const Proyectos = () => {

    const [t] = useTranslation();

    const cardImg = (img, url, title) => {
        return (
            <a className='containerCard' href={url}>
                <div className="col animate__animated animate__fadeIn">
                    <div className='cardProjects'>
                        <img className='cardProjectsImg' src={img} alt="" />
                        <h4 className='titleProject'><b>{title}</b></h4>
                   
                </div>
          </div></a>
          
        );
      }
    
      return (
        <div className='tituloProject'>
          <h1 className='text-center mt-5' id='misProyectos'><b>{t("PROJECTS2")}</b></h1>
          <h3 className='text-center tituloProyectos'>{t("PROJECTS3")}</h3>
    
          <div className="container text-center mt-5">
            <div className="row containerProyectos">
    
              <div className="col">
                {cardImg(aluminumMold, 'https://aluminummold.netlify.app/', 'AluminumMold')}
                {cardImg(appGenerator, 'https://wonderful-frangollo-6c14b5.netlify.app/', 'PasswordGenerator')}
              </div>
    
              <div className="col">
                {cardImg(mercadoLiebre, 'https://mercado-liebre-joaquin.netlify.app/', 'MercadoLiebre')}
                {cardImg(gifApp, 'https://gif-expert-app-joaquin.netlify.app/', 'GifApp')}
              </div>
    
              <div className="col">
                {cardImg(RickAndMorty, 'https://rickandmortycaparros.netlify.app/', 'RickAndMorty')}
              </div>
    
            </div>
          </div>
    
        </div>
      )
}

