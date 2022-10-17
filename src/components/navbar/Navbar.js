import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.logo} to={'/'}>
        <h3>LOGO</h3>
      </Link>
        <ul className={styles.menu}>
          <li  className={styles.link}>
            <Link to={'/'}>Inicio</Link>
          </li>
          <li  className={styles.link}>
            <Link to={'/nosotros'}>Nosotros</Link>
          </li>
          <li  className={styles.link}>
            <Link to={'/servicios'}>Servicios</Link>
          </li>
          <li  className={styles.link}>
            <Link to={'/contactos'}>Contactos</Link>
          </li>
        </ul>
        <Link to={'/ingresar'}>
          <button className={styles.login}>Ingresar</button>
        </Link>
      </nav>
  )
}

export default Navbar