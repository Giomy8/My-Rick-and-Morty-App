const server = require('./app');
const PORT = 3001;


server.listen(PORT, () => {
    console.log(`Server raised in port: ${PORT}`);
});


// const express = require("express");
// const router = require("./routes/index.js");

// const server = require("./app.js");
// const PORT = 3001;


// server.listen(PORT, () => {
//   console.log("Server raised in port: " + PORT);
// });


