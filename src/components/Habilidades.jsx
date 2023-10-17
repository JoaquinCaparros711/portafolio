import React from 'react';
import html from "/img/html.png";
import css from "/img/css.png";
import js from "/img/javascript.png";
import bootstrap from "/img/bootstrap.png";
import react from "/img/react.png";
import python from "/img/python.png";
import mysql from "/img/mysql.png";
import github from "/img/github.png";
import git from "/img/git.png";
import java from "/img/java.png";
import terminal from "/img/terminal.png";
import materialUI from "/img/materialui.png";
import { useTranslation } from 'react-i18next';



    


export const Habilidades = () => {

  const [t] = useTranslation();

  return (
    
    <div className="text-center containerHabilidades text-white" id='containerHabilidades'>
      <h1><b>{t("SKILLS")}</b></h1>
      <div className="row">
        <div className="col order-last tarjetaHabilidades">
          <h2>Back End</h2>
          <div>
            <img src={python} alt="" />
            <img src={java} alt="" />
            <img src={mysql} alt="" />
          </div>
        </div>
        <div className="col tarjetaHabilidades">
          <h2>{t("TOOLS")}</h2>
          <div>
            <img src={terminal} alt="" />
            <img src={git} alt="" />
            <img src={github} alt="" />
            <img src={materialUI} alt="" />
          </div>
        </div>
        <div className="col order-first tarjetaHabilidades">
          <h2>Front End</h2>
          <div>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={js} alt="" />
            <img src={bootstrap} alt="" />
            <img src={react} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
