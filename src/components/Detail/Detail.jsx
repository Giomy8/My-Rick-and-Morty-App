import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      {character.name && <h1>{character.name}</h1>}
      {character.image && <img src={character.image} alt={character.name} />}
      {character.status && <p>Estado: {character.status}</p>}
      {character.species && <p>Especie: {character.species}</p>}
      {character.gender && <p>Género: {character.gender}</p>}
      {character.origin && character.origin.name && <p>Origen: {character.origin.name}</p>}
    </div>
  );
}

export default Character;