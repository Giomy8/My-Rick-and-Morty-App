import styles from "./Card.module.css";
import {IconTrash,IconUserQuestion,IconHeartFilled} from "@tabler/icons-react"
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions/actions";
import {useState, useEffect } from "react";
import { connect } from "react-redux";

 function Card(props) {
   console.log('J',props)
   const { id, name, species, gender, status, image} = props.character
   
  const [isFav, setIsFav]  = useState(false);

  const handleFavorite = () => {
   if(isFav){
      setIsFav(false);
      props.removeFav(id);
   }else{
      setIsFav(true);
      props.addFav(props.character);
   }
  };

  useEffect(() => {
      props.myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
  }, [props.myFavorites]);

   return (
      <div className={styles.pestana}>
         <div className={styles.nombre}>
            {name}
         </div>
         <button className = {styles.buttontrash} onClick = {()=> props.onClose(id)} ><IconTrash/></button>
         <Link to = {"/detail/"+ id}><button  className = {styles.info}><IconUserQuestion size ={25}/></button>
         </Link>
         <div className={styles.card}>

            <div className={styles.contenedorimg}>
               <img src={image} alt="Nombre del personaje" />
            </div>

            <div className={styles.contenedordatos}>
               <div className={styles.datos}>
               <h2>Gender: {gender}</h2>
               <h2>Specie: {species}</h2>
               <h2>Status: {status}</h2>
               <IconHeartFilled className ={isFav? styles.agregarFav : styles.quitarFav} onClick={handleFavorite}/>
               </div>
            </div>       
     
         </div>


      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
     addFav: (character) => {
       dispatch(addFav(character))
     },
     removeFav: (id) => {
       dispatch(removeFav(id))
     },
   };
 };

 const mapStateToProps = (state) => {
      return{
      myFavorites: state.myFavorites,
   };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(Card);

