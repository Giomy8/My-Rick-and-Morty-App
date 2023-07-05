import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav ({onSearch, setAccess}){
  const navigate = useNavigate()
       return(
        <nav className={styles.FondoSearchBar}>
          <div></div>   
          <div className={styles.menu}>
            <Link to="/favorites"><button className={styles.button}>favorites</button></Link>
            <Link to="/about"><button className={styles.button}>About</button></Link>
          <Link to="/home"><button className={styles.button}>Home</button></Link>     
          <SearchBar onSearch = {onSearch} />
        </div>
        <button onClick={()=>{
          setAccess(false)
          navigate('/')
          }}>Log Out</button>
        </nav>
        )
}



  

