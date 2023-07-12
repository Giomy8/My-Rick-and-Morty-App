import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.css';
import {IconArrowBackUp} from "@tabler/icons-react";
import sello from '../../imagenes/sello.png';
import clip from '../../imagenes/clip.png';


function Character() {
  const { detailId} = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/detail/${detailId}`)
    .then((response) => response.json())    
    .then((char) => {
      if(char.name) {
        setCharacter(char);
      }else {
        alert("There are no characters with this ID!")
      }
    })
    .catch((err) => {
      alert("There are no characters with this ID!");
    });
       return setCharacter({});
    }, [detailId])

  return (
    <>
   <div className={styles.contenedor}>
      <div className={styles.bordedatos}>
        <div className={styles.datos}>
          <div className={styles.columdatos}>
            {character.species && <p>Specie: {character.species}</p>}
            {character.gender && <p>Type: {character.type}</p>}
            {character.origin?.name && <p>Origin: {character.origin.name}</p>}
            {character.location?.name && <p>Location: {character.location.name}</p>}
            {character.episode && character.origin?.name && (
              <p>Episode: <Link to={character.episode}>ver</Link></p>
            )}
            {character.created && character.origin?.name && <p>Created: {character.created}</p>}
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
         
         
         <div className={`${styles.card} ${character.status === "Dead" ? styles.dead : character.status === "Alive" ? styles.alive : styles.unknown}`}>

            <div className={styles.contenedorimg}>
               <img src={character.image} alt="Nombre del personaje" />
            </div>

<div className={styles.clip} >
<img src={clip} alt="clip"/>
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