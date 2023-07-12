var http = require("http");
const data = require("./utils/data");

const PORT = 3001;

module.exports = http.createServer((req, res) => {
  console.log(`Server raised in port ${PORT}`);
  
  if (req.url.includes("/rickandmorty/character/")) {
    const id = parseInt(req.url.split("/").pop());
    const character = data.find((character) => character.id === id);

    if (character) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    } else {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Character not found");
    }
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
}).listen(PORT, "localhost");
