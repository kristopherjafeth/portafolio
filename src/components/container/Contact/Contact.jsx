import React from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="container" id="contacto">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>¿Tienes una duda?</span>
            <h1>Contácta conmigo</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>¿Hay algo que quieras decirme?</h3>
          <p className='contact_text'>De ser el caso, necesitare que me envies tus datos en el siguiente formulario que esta a la derecha, para poder ponerme en contacto lo más rápido posible contigo.</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <div key={index} >
                {socialIcon}
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Estoy en linea</h3>
          <div className="row">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellido'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Teléfono' />
            <input type="email" placeholder='Correo' />
          </div>
          <div className="row">
            <textarea placeholder='Tu mensaje'></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
            className="btn"
          >
            <a href="#">Enviar</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact