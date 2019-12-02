var express = require("express");

var app = express();

app.set("view engine", "jade");

app.get("/", function(req, res) {
    res.render("index", {contenido: "Json pasado por param"});
})

app.listen(8080);
