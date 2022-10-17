import React from 'react'
import styles from './contactosUbicacion.module.css'
import whatsapp from '../../assets/ico.whatsapp.png'
import location from '../../assets/ico.locationSmall.png'

const ContactosUbicacion = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.ubicacionTitle}>ubicacion</h2>
      <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.1182405027716!2d-64.19407768530652!3d-31.410868203127094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432987ef8712141%3A0x7f764e898e6bb538!2sAv.%20Col%C3%B3n%20644%2C%20X5000EPT%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1639919219383!5m2!1ses-419!2sar" allowFullScreen="" loading="lazy" className={styles.mapa}></iframe>
      <div className={styles.innerContainer}>
        <div className={styles.datosContainer}>
          <img src={whatsapp} alt="" />
          <p>AV. COLÓN 365, LOCAL 5, CÓRDOBA.</p>
        </div>
        <div className={styles.datosContainer}>
          <img src={location} alt="" />
          <p>+59 351-2207682</p>
        </div>
      </div>
    </div>
  )
}

export default ContactosUbicacion