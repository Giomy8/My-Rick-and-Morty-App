const express = require("express");
const router = express.Router();
const login = require("../controllers/login");
const postUser = require("../controllers/postUser");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const getCharById = require("../controllers/getCharById");
const allFav = require("../controllers/allFav");


router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.get("/favorites", allFav);
router.delete("/fav/:id", deleteFav);
router.get("/character/:id", getCharById);
router.get("/detail/:id", getCharById);


module.exports = router;

