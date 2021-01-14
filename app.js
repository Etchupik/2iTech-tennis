import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import { setRouting } from './routing.js';

//creation et config de la connexion a la bdd mongo
const server = express();
mongoose.connect('mongodb://localhost:27017/cours',{
    poolSize: 10,
    authSource: "admin", 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//connexion a mongo
const db = mongoose.connection;

//log au demarrage de mongo
db.on('error', console.error.bind(console, 'console.error'))
db.once('open', () => console.log('Mongo started...'))

//recupere plus facilement les donnees de la requete
server.use(bodyParser.json())

//route vers userController
setRouting(server)

//demarrer le serveur
server.listen(8080, () => console.log('Serveur started...'))