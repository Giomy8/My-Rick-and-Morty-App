import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.css';
import {IconArrowBackUp} from "@tabler/icons-react";

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
    <div>
      {character.name && <h1>{character.name}</h1>}
      {character.image && <img src={character.image} alt={character.name} />}
      {character.status && <p>Status: {character.status}</p>}
      {character.species && <p>Specie: {character.species}</p>}
      {character.gender && <p>Gender: {character.gender}</p>}
      {character.origin && character.origin.name && <p>Origin: {character.origin.name}</p>}
    </div>
    <Link to = {"/home"}><button className = {styles.button}><IconArrowBackUp/></button></Link>
    </>
  );
}

export default Character;