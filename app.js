// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log('Serveur lancé sur le port : ' + port);
});