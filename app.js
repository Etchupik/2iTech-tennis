import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { setRouting } from "./routing.js";
import fs from "fs";

//creation et config de la connexion a la bdd mongo
const server = express();
mongoose.connect("mongodb://localhost:27017/cours", {
  poolSize: 10,
  authSource: "admin",
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

//connexion a mongo
const db = mongoose.connection;

//log au demarrage de mongo
db.on("error", console.error.bind(console, "console.error"));
db.once("open", () => console.log("Mongo started..."));

//recupere plus facilement les donnees de la requete
server.use(bodyParser.json());

//route vers userController
setRouting(server);

const players = JSON.parse(
  fs.readFileSync(`./dev-data/data/players-simple.json`)
);

server.post("/users", (req, res) => {
  //console.log(req.body);

  const newId = players[players.length - 1].id + 1;
  const newPlayer = Object.assign({ id: newId }, req.body.userName);


  players.push(newPlayer);

  fs.writeFile(
    `./dev-data/data/players-simple.json`,
    JSON.stringify(players),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          player: newPlayer,
        },
      });
    }
  );
});

//demarrer le serveur
server.listen(8080, () => console.log("Serveur started..."));

/*// app.js
const express = require('express');
const bodyParser = require('body-parser');
// initialize our express app
const app = express();

let port = 3000;

app.listen(port, () => {
    console.log('Serveur lancé sur le port : ' + port);
});
*/
