import React from 'react'
import styles from './nosotrosHistoria.module.css'
import clinica from '../../assets/clinica-historia.jpg'

const NosotrosHistoria = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
      <h2 className={styles.titulo}>un poco de historia</h2>
      <p className={styles.historia}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, officia sapiente repellat debitis culpa reprehenderit mollitia distinctio beatae, nobis ex dolore, aut sit similique laborum animi voluptate eveniet ducimus dolor.
      Quibusdam quos iusto facilis sapiente quas commodi nesciunt odio doloremque mollitia asperiores ipsam necessitatibus eaque tenetur debitis amet placeat repellendus adipisci earum quam, quo ut doloribus voluptatem. Molestiae, delectus quo?
      Dicta autem repellendus maxime reprehenderit tenetur, blanditiis harum, totam laborum, est dolores atque ducimus vitae voluptatum sed voluptas a magni. Harum sit tempora blanditiis sequi aliquam amet illum facilis perferendis.
      Possimus voluptatem rerum, pariatur in suscipit soluta nisi commodi aliquid accusamus mollitia natus, et fugiat repudiandae eius ullam veritatis optio, inventore nam harum iure qui culpa consequuntur. Cumque, autem sunt?
      Modi consequuntur dignissimos eaque! Accusantium laboriosam provident iste doloribus voluptates, ipsum molestiae ducimus veniam ipsam laborum harum, praesentium dicta debitis odio ut facilis. Illum doloremque nam sint error neque. Et!</p>
      <img className={styles.imagen} src={clinica} alt="" />
      </div>
    </div>
  )
}

export default NosotrosHistoria