//cannot start mysql CLI (mysql command not found)

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var PORT = process.env.PORT || 3000;

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");


// Set Handlebars.
var exphbs = require("express-handlebars");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });