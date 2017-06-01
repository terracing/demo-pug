var express = require("express");
var app = express();

app.set("view engine", "pug");
app.use("/public", express.static('assets'));

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/hello", function (req, res) {
    res.render("hello");
});

app.listen(8081);