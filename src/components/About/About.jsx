import styles from './About.module.css';
import about from '../../imagenes/about.png';
import foto from '../../imagenes/mifoto.jpg'

function About() {
  return (
    <div className={`${styles.fondoabout} ${styles.centro}`}>
      <div className={styles.doc}>

<div className={`${styles.celda} ${styles.down}`}>
<img src={foto} alt="Giomar Mesa" className={styles.card_image} />
</div>
<div className={styles.celda}>
<div className={`${styles.celda} ${styles.up}`}>
Soy Giomar Andrea Mesa Molina , actualmente estudio en  Soy Henry!, aprendo en ésta area
para ser una desarrolladora Full Stack, quiero lograr generar estrategias,
ayudar en el mercado tecnológico y realizar aplicaciones fáciles y atractivas para 
tanto empresarios como usuarios.
<br /> <br />
Te doy la bienvenida y espero que disfrutes de mi primer desarrollo.
</div>
</div>

      </div>
      
    </div>
  );
}

export default About;