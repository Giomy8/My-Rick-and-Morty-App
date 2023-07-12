import styles from './HeaderIndex.module.css';
import Logo from '../../imagenes/logo.png';

export default function HeaderIndex () {
    return (
    <div className={styles.headerindex}>
        <img className={styles.imagen} src= {Logo} alt="Rick&Morty" />
    </div>
    )
}