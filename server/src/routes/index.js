const express = require("express");
const router = express.Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav, favorites } = require("../controllers/handleFavorites");

router.get("/character/:id", getCharById);
router.get("/detail/:id", getCharById);
router.get("/login", login);
router.post("/fav", (req, res) => { postFav(req, res);
});
router.get("/favorites", favorites);
router.delete("/fav/:id", (req, res) => { deleteFav(req, res)});

module.exports = router;

