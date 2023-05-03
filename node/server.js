import express from "express";
const app = express();
import http from "http";
const server = http.createServer(app);

import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

import routes from "./api/routes.js";
routes(app);

import socket from "./socket/index.js";
const io = socket(server);
global.io = io;

server.listen(port, function () {
  console.log("listening on *:" + port);
});
