import styles from "./SearchBar.module.css"
import {id} from "react";
import  {useState} from "react";

export default function SearchBar({onSearch}) {

   const [id , setId] = useState ("");
   function handleChange (event){
      let valor = event.target.value
      setId(valor)
   }
   return (
      <div className = {styles.contenedor}>
         <input className = {styles.input} type='search' onChange = {handleChange}/>
         <button className = {styles.button} onClick={()=> onSearch(id)}>Agregar </button>
         <button className = {styles.button} onClick={()=>{onSearch(getRandomCharacterId())}}>Agregar personaje aleatorio</button>
      </div>
   );

   function getRandomCharacterId() {
      const randomId = Math.floor(Math.random() * 826) + 1;
      return randomId;
    }


}
