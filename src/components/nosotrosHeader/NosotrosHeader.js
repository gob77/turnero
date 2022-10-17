import React from 'react'
import styles from './nosotrosHeader.module.css'
import equipo from '../../assets/equipo-medicos.webp'

const NosotrosHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.descripcion}>
        <h2>Calidad Humana</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis consequuntur, ipsum sequi tenetur iure quia ex iusto ab laborum laudantium exercitationem unde aliquid expedita, labore impedit? Natus aut facere ab!
        Ipsam velit pariatur voluptatum reiciendis, illo eligendi tempore magni eius, soluta vitae nisi facilis obcaecati? Blanditiis et eligendi ipsam, molestiae libero rem laudantium voluptas accusantium nisi recusandae delectus distinctio explicabo.</p>
      </div>
      <div className={styles.imagen}>
        <img className={styles.img} src={equipo} alt="" />
      </div>
    </div>
  )
}

export default NosotrosHeader