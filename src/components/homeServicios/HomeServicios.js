import React from 'react'
import styles from './homeServicios.module.css'
import servicio1 from '../../assets/servicios1.jpg'
import servicio2 from '../../assets/servicios2.jpg'
import servicio3 from '../../assets/servicios3.jpg'

const HomeServicios = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h5 className={styles.serviciosTitulo}>Turnos Online</h5>
        <img className={styles.servicioIMG} src={servicio1} alt="servicios" />
        <p className={styles.serviciosDescripcion}>Gestione y reserve sus turnos de manera online</p>
      </div>
      <div className={styles.card}>
        <h5 className={styles.serviciosTitulo}>Centros de Atencion</h5>
        <img className={styles.servicioIMG} src={servicio2} alt="servicios" />
        <p className={styles.serviciosDescripcion}>Encuentre centros medicos cercanos para una atencion oportuna</p>
      </div>
      <div className={styles.card}>
        <h5 className={styles.serviciosTitulo}>Historial Clinico</h5>
        <img className={styles.servicioIMG} src={servicio3} alt="servicios" />
        <p className={styles.serviciosDescripcion}>Encuentre sus registos de atencion</p>
      </div>
    </div>
  )
}

export default HomeServicios