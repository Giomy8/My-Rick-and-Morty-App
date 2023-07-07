import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.css';
import {IconArrowBackUp} from "@tabler/icons-react";
import sello from '../../imagenes/sello.png';



function Character() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return () => setCharacter({});
  }, [id]);

  return (
    <>
      <div className={styles.contenedor}>

      <div className={styles.bordedatos}>
      
      <div className={styles.datos}>
      <div className={styles.columdatos}>
      {character.species && <p>Specie: {character.species}</p>}
      {character.gender && <p>Type:  {character.type}</p>}
      {character.origin && character.origin.name && <p>Origin: {character.origin.name}</p>}
      {character.origin && character.origin.name && <p>Location: {character.location.name}</p>}
      {character.origin && character.origin.name && <p>Episode: <Link to ={character.episode}> ver</Link></p>}
      {character.origin && character.origin.name && <p>Created: {character.created}</p>}
      </div>

      <div className={styles.sello}>
        <img className ={styles.atras} src= {sello} />
        <div className={styles.adelante} >
        {character.id} - {character.status}
        </div>
        
      </div>



      <div className={styles.imagen}>

      <div className={styles.pestana}>
         <div className={styles.nombre}>
            {character.name}
         </div>
         
         
         <div className={styles.card}>

            <div className={styles.contenedorimg}>
               <img src={character.image} alt="Nombre del personaje" />
            </div>

                 
     
         </div>


      </div>
      {/* {character.name && <h1>{character.name}</h1>}
      {character.image && <img src={character.image} alt={character.name} />} */}
      </div>

      </div>

      </div>

    </div>
    <Link to = {"/home"}><button className = {styles.button}><IconArrowBackUp/></button></Link>
    </>
  );
}

export default Character;