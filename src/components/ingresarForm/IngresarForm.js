import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faKey, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import styles from './ingresarForm.module.css'

const IngresarForm = () => {
  const [signup, setSignup] = useState(true)

  const handleClick = () => {
    setSignup(prev => !prev)
  }

  return (
    <div className={styles.container}>
      <form className={styles.ingresarForm}>
      {!signup ? (
        <>
        <h2 className={styles.title}>Iniciar Sesion</h2>
        <div className={styles.ingresarInput}>
          <FontAwesomeIcon className={styles.inputICO} icon={faUser} />
          <input type="text" />
        </div>
        <div className={styles.ingresarInput}>
          <FontAwesomeIcon className={styles.inputICO} icon={faKey} />
          <input type="password" />
        </div>
        <button className={styles.ingresarBTN}>Iniciar Sesion</button>
        <p className={styles.registrarse}>¿No tienes cuenta? <span className={styles.signup} to='/' onClick={handleClick}>registrarse</span></p>
        </>
      ) : (
        <>
        <h2 className={styles.title}>Registrase</h2>
        <div className={styles.ingresarInput}>
          <FontAwesomeIcon className={styles.inputICO} icon={faUser} />
          <input type="text" />
        </div>
        <div className={styles.ingresarInput}>
          <FontAwesomeIcon className={styles.inputICO} icon={faEnvelope} />
          <input type="text" />
        </div>
        <div className={styles.ingresarInput}>
          <FontAwesomeIcon className={styles.inputICO} icon={faKey} />
          <input type="password" />
        </div>
        <button className={styles.ingresarBTN}>Registrase</button>
        <p className={styles.registrarse}>¿Ya tienes cuenta? <span className={styles.signup} to='/' onClick={handleClick}>iniciar sesion</span></p>
        </>
      )}
      </form>
    </div>
  )
}

export default IngresarForm