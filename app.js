var express = require("express");

var app = express();

app.get("/", function(req, res) {
    res.send("Hola prueba de datos");
})

app.listen(8080);
