const express = require("express");

const routes = require("./routes");

const server = express();

const mustacheExpress = require('mustache-express');
server.engine('mustache', mustacheExpress());
server.set('view engine', 'mustache');

server.use(express.json());

server.use(routes);

module.exports = server;