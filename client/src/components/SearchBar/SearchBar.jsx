import styles from "./SearchBar.module.css"
import  {useState} from "react";
import {IconUserPlus, IconSearch} from "@tabler/icons-react"
import { useNavigate } from "react-router-dom";
import {IconLogout} from "@tabler/icons-react";
export default function SearchBar({onSearch, setAccess}) {
   const navigate = useNavigate()
   const [id , setId] = useState ("");
   function handleChange (event){
      let valor = event.target.value
      setId(valor)
   }
   return (
      <div className = {styles.contenedor}>
         <div className = {styles.buscador}>
          <input className = {styles.input} type='search' onChange = {handleChange}
         />
         <i className={styles.lupa}>
            <IconSearch/>
         </i>  
         </div>
         

         <button className = {styles.button} onClick={()=> onSearch(id)}> Add </button>

         <button className = {styles.button} onClick={()=>{onSearch(getRandomCharacterId())}}>
         <IconUserPlus/>
         </button>

         <button onClick={()=>{

         setAccess(false)
         navigate('/')
         }} className={styles.salir}>
         <IconLogout/>
 
         </button>

      </div>
   );

   function getRandomCharacterId() {
      const randomId = Math.floor(Math.random() * 826) + 1;
      return randomId;
    }


}
