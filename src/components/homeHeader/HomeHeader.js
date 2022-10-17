import React from 'react'
import { Link } from 'react-router-dom'
import styles from './homeHeader.module.css'

const HomeHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1 className={styles.title}>ISPC</h1>
        <h2 className={styles.subtitle}>Consultorios Medicos</h2>
        <Link className={styles.serviciosContainer} to={'/servicios'}>
          <button className={styles.servicios}>Nuestros Servicios</button>
        </Link>
      </div>
    </div>
  )
}

export default HomeHeader