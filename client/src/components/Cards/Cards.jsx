import Card from '../Card/Card';
import styles from "./Cards.module.css";

export default function Cards({characters, onClose}) {
   
   return(
   <div className = {styles.distribucion}>
      {characters.map((character,i)=>{
         //console.log('Cards',character)
         return (
         <Card key = {i}
          character ={character}
          onClose = {onClose}
         />
         );
      })}
   </div>
   );
}
