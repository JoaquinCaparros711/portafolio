import React from 'react';
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from 'react-i18next';




   

export const Contact = () => {

  const [state, handleSubmit] = useForm("mqkvlyjd");

  const [t, i18n] = useTranslation();
    
  return (
    <form 
      id="form"
      className="form"   
      onSubmit={handleSubmit}
    >

      <div className="container-fluid form-container" id='form-container'>

        <h1><b>{t("CONTACTME")}</b></h1>

        <h4>{t("CONTACTME2")}</h4>
        
          <input 
            type="text" 
            className="form-input" 
            placeholder="Name" 
            name="name"
          />

          <input 
            type="email" 
            className="form-input" 
            placeholder="Email" 
            name="email"
          />
            <ValidationError
            prefix="Email" 
            field="email"
            errors={state.errors}
          />

          <textarea 
            className="form-input mensaje" 
            placeholder="Message" 
            name="message"
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />

          <input data-aos="fade-right" data-aos-duration="2000" type="submit" value={t("BUTTONCONTACT")} className="form-cta" disabled={state.submitting} />
        

      </div>

      <h4 className='text-center pb-4'>{t("2023")}</h4>

    </form>
  )
}
