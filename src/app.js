import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { setRouting } from "./routing.js";
import fs from "fs";

class App{
  _server;
  _serverPort;

  _mongoosePort;
  _mongoosePath;
  _mongooseConfig;
  
  _dataBase;
  _dataBasePath;

  constructor(){
    this.server = express();
    this.serverPort = 8080;

    this.mongoosePort = 27017;
    this.mongoosePath = `mongodb://localhost:${this.mongoosePort}/cours`;
    this.mongooseConfig = {
      poolSize: 10,
      authSource: "admin",
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };

    this.dataBase = mongoose.connection;
    this.dataBasePath = "./src/assets/dataBase.txt";
  }

  main(){
    this.runMongo();
    this.runServer();
    this.logRequest();
    setRouting(this.server);
  }

  runMongo(){
    mongoose.connect(this.mongoosePath, this.mongooseConfig);

    this.dataBase.on("error", console.error.bind(console, "console.error"));
    this.dataBase.once("open", () => console.log("Mongo started..."));
  }

  runServer(){
    this.server.use(bodyParser.json());
    this.server.listen(this.serverPort, () => console.log("Serveur started..."));
  }

  logRequest(){
    this.server.use((req, res, next) => {
      let date = new Date();
      let logString = `${date.getHours()}:${date.getMinutes()} - ${req.method} - ${JSON.stringify(req.body)} \n`;
      fs.appendFile(this.dataBasePath, logString, (() => {}));
      next();
    })
  }

  get server() {
    return this._server;
  }
  set server(value) {
    this._server = value;
  }

  get dataBase() {
    return this._dataBase;
  }
  set dataBase(value) {
    this._dataBase = value;
  }

  get mongoosePath() {
    return this._mongoosePath;
  }
  set mongoosePath(value) {
    this._mongoosePath = value;
  }

  get mongooseConfig() {
    return this._mongooseConfig;
  }
  set mongooseConfig(value) {
    this._mongooseConfig = value;
  }

  get mongoosePort() {
    return this._mongoosePort;
  }
  set mongoosePort(value) {
    this._mongoosePort = value;
  }

  get serverPort() {
    return this._serverPort;
  }
  set serverPort(value) {
    this._serverPort = value;
  }

  get dataBasePath() {
    return this._dataBasePath;
  }
  set dataBasePath(value) {
    this._dataBasePath = value;
  }

}

export const app = Object.freeze(new App())
