let myFavorites = [];

const postFav = (req, res) => {
  // console.log(req.body)
  const  character  = req.body;

  myFavorites.push(character);
// console.log(character , "aqui")
  return res.json(myFavorites);
  
};

const favorites = (req, res) => {
  return res.json(myFavorites);
};

const deleteFav = (req, res) => {
  // console.log(myFavorites,"ya")
  const  {id}  = req.params;
// console.log(id ,"hola")
  myFavorites = myFavorites.filter(character => +character.id !== +id);
// console.log(myFavorites,"****")
  return res.json(myFavorites);
};

module.exports = { postFav, deleteFav, favorites };
