const { Favorite } = require("../DB_connection");  

const postFav = async (req, res) => {
    try {
    const {id, name, origin, status, image, species, gender } = req.body;
    if (!name || !origin || !status || !image || !species || !gender) {
      return res.status(401).json({ message: "Faltan datos" });
    }
    const newFav = await Favorite.findOrCreate({
      where: {
        name: name
      },
      defaults: {id, name, origin, status, image, species, gender}
    });
    return res.status(200).json(newFav);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = postFav;

