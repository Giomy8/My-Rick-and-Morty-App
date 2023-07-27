const server = require('./app');
const { conn } = require('./DB_connection');
const PORT = 3001;


conn.sync({ force: false }).then(() => {
    console.log('conexion a base de datos')
    server.listen(PORT, () => {
        console.log(`Server raised in port: ${PORT}`);    
    });
}
);




// const express = require("express");
// const router = require("./routes/index.js");

// const server = require("./app.js");
// const PORT = 3001;


// server.listen(PORT, () => {
//   console.log("Server raised in port: " + PORT);
// });


