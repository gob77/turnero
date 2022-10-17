import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import facebook from '../../assets/ico.facebook.png'
import instagram from '../../assets/ico.instagram.png'
import youtube from '../../assets/ico.youtube.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.copyright}>
        <p>Turnero &#169; 2022</p>
        <p>Todos los derechos reservados</p>
        <p>sitio creado por Mauricio Ortiz</p>
      </div>
      <div className={styles.redesSociales}>
        <a href='https://www.facebook.com'>
          <img src={facebook} alt="facebook" />
        </a>
        <a href='https://www.instagram.com'>
          <img src={instagram} alt="instagram" />
        </a>
        <a href='https://www.youtube.com'>
          <img src={youtube} alt="youtube" />
        </a>
      </div>
    </div>
  )
}

export default Footer