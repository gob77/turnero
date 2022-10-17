import React from 'react'
import styles from './serviciosHeader.module.css'
import servicio1 from '../../assets/servicio1.jpg'
import servicio2 from '../../assets/servicio2.jpg'
import servicio3 from '../../assets/servicio3.jpg'

const ServiciosHeader = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.serviciosTitle}>Servicios de calidad</h2>
      <h3 className={styles.serviciosSubtitle}>para brindarte seguridad y confianza</h3>
      <div className={styles.innerContainer}>
        <div className={styles.card}>
          <img className={styles.imagen} src={servicio1} alt="" />
          <h4>Servicio 1</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nulla modi accusantium ullam libero, laudantium dicta veritatis repellendus, nihil animi rerum repudiandae, inventore aut provident cumque esse. Veniam, cum dignissimos?</p>
        </div>
        <div className={styles.card}>
          <img className={styles.imagen} src={servicio2} alt="" />
          <h4>Servicio 1</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nulla modi accusantium ullam libero, laudantium dicta veritatis repellendus, nihil animi rerum repudiandae, inventore aut provident cumque esse. Veniam, cum dignissimos?</p>
        </div>
        <div className={styles.card}>
          <img className={styles.imagen} src={servicio3} alt="" />
          <h4>Servicio 1</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nulla modi accusantium ullam libero, laudantium dicta veritatis repellendus, nihil animi rerum repudiandae, inventore aut provident cumque esse. Veniam, cum dignissimos?</p>
        </div>
        <div className={styles.card}>
          <img className={styles.imagen} src={servicio1} alt="" />
          <h4>Servicio 1</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nulla modi accusantium ullam libero, laudantium dicta veritatis repellendus, nihil animi rerum repudiandae, inventore aut provident cumque esse. Veniam, cum dignissimos?</p>
        </div>
        <div className={styles.card}>
          <img className={styles.imagen} src={servicio2} alt="" />
          <h4>Servicio 1</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nulla modi accusantium ullam libero, laudantium dicta veritatis repellendus, nihil animi rerum repudiandae, inventore aut provident cumque esse. Veniam, cum dignissimos?</p>
        </div>
        <div className={styles.card}>
          <img className={styles.imagen} src={servicio3} alt="" />
          <h4>Servicio 1</h4>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia nulla modi accusantium ullam libero, laudantium dicta veritatis repellendus, nihil animi rerum repudiandae, inventore aut provident cumque esse. Veniam, cum dignissimos?</p>
        </div>
      </div>
    </div>
  )
}

export default ServiciosHeader