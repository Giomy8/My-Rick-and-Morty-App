const { User } = require("../DB_connection");

const postUser = async (req, res) => {
    const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).send("Faltan datos");
  } else {
    try {
      const newUser = await User.findOrCreate({
        where: { email },
        defaults: { password },
      });
      res.send(newUser[0]);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
};

module.exports = postUser;
