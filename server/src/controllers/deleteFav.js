const { Favorite } = require("../DB_connection"); 

const deleteFav = async (req, res) => {
    try {
    const { id } = req.params;
    const trash = await Favorite.destroy({
      where: {
        id: id
      }
    });
    if (!trash) {
      res.status(404).json({ message: "not found" });
    }
    const listFav = await Favorite.findAll();
    res.status(200).json(listFav);
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = deleteFav;
