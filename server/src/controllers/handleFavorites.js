let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;

  myFavorites.push(character);

  return res.json(myFavorites);
};

const favorites = (req, res) => {
  return res.status(404).send(error.message)
};

const deleteFav = (req, res) => {
  const { id } = req.params;

  myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);

  return res.status(200).json(myFavorites);
};

module.exports = { postFav, deleteFav, favorites };

