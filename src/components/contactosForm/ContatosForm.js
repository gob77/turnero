import React from 'react'
import styles from './contactosForm.module.css'

import contactanos from '../../assets/contactos.jpg'

const ContatosForm = () => {
  return (
    <div className={styles.container}>
      <img className={styles.contactosIMG} src={contactanos} alt="" />
      <form className={styles.contactosForm}>
        <div className={styles.inputContainer}>
          <label htmlFor="email">Tu email</label>
          <input type="email" name='email' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="mensaje">Dejanos tu mensaje</label>
          <textarea name="mensaje" cols="30" rows="10" />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}

export default ContatosForm