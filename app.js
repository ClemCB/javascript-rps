const express = require("express"),
  bodyParser = require("body-parser"),
  querystring = require('querystring'),
  http = require('http'),
  fs = require('fs'),
  Game = require('./models/Game'),
  game = new Game(),
  app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index", { game : game});
});

app.get("/result", function(req, res) {
  game.play(req.query.weapon);
  res.render("winner", { game: game } );
});

app.get("/restart", function(req, res) {
  game.restartGame()
  res.render("index", { game: game } );
});

app.listen(5500, function() {
  console.log("I'M LISTENING #5500!");
});

module.exports = app;
