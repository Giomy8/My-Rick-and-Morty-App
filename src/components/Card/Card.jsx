import styles from "./Card.module.css";
import {IconTrash,IconInfoCircleFilled} from "@tabler/icons-react"


export default function Card(props) {
   let { id, name, species, gender, image} = props.character
   //console.log('Card', props.character.id)
   
   return (
      <div className={styles.pestana}>
         <div className={styles.nombre}>
            {name}
         </div>
         <button className = {styles.button} onClick = {()=>props.onClose(id)} ><IconTrash/></button>
         <button  className = {styles.info} onClick = {()=>props.onClose(id)}><IconInfoCircleFilled size ={50}/></button>

         <div className={styles.card}>

            <div>
               <img src={image} alt="Nombre del personaje" />
            </div>

            <div className={styles.datos}>
               <h2>Specie: {species}</h2>
               <h2>Gender: {gender}</h2>
            </div>

                          
         
         </div>


      </div>
   );
}
