const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;

  axios.get(`${URL}${id}`)
    .then(response => {
      const data = response.data;
      if (Object.keys(data).length === 0) {
        return res.status(404).json({ message: "Not found" });
      }

      const character = {
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin,
        image: data.image,
        gender: data.gender
      };

      return res.status(200).json(character);
    })
    .catch(err => {
      return res.status(500).send(`Error: ${err.message}`);
    });
};

module.exports = getCharById;

