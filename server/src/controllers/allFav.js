const { Favorite } = require("../DB_connection");  

const allFav = async (req, res) => {
    try {
    const listFav = await Favorite.findAll();
    return res.status(200).json(listFav);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = allFav;

