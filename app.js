const express = require("express"),
  bodyParser = require("body-parser"),
  app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.render("index");
});

// CURRENTLY SET UP FOR A PROMISE - WOULD PREFER A CALLBACK FUNCTION.
// app.post("/play", urlencodedParser, function(req, res) {
//   console.log(req.body.searchinput)
//   user_selection = req.body.searchinput
//   playGame(user_selection)
//     .then(function(returned_data) {
//       res.render("result", { data: returned_data, query: query })
//     })
//     .catch(function(e) {
//       console.log(e)
//     });
// });

app.listen(5500, function() {
  console.log("I'M LISTENING #5500!");
});

module.exports = app;
