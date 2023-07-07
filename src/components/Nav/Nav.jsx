import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import Logo from '../../imagenes/logo.png';


export default function Nav ({onSearch, setAccess}){
  
       return(
        <nav className={styles.FondoSearchBar}>

         <div className={styles.menu}>
         <Link to="/home"><button >Home</button></Link>
         <Link to="/favorites"><button >
         Favorites</button></Link>
         <Link to="/about"><button >About</button></Link>
         </div>

         <div> 
          <img className={styles.imagen}src= {Logo} alt="Rick&Morty" /> 
        </div>

        <div>
        <SearchBar onSearch = {onSearch}
        setAccess = {setAccess}
        />
        </div>

        </nav>
    )
}



  

