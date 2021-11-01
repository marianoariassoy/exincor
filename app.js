const express = require("express");
const app = express();

//puerto
require('dotenv').config();
const port = process.env.PORT;

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + "/views/partials/");
app.set('view engine', 'hbs');

//Contenido estatico
app.use(express.static(__dirname + "/public"));

//rutas
app.get("/", function (req, res) {
   res.render("index");
});

app.get("/somos", function (req, res) {
   res.render("somos");
});

app.get("/servicios", function (req, res) {
   res.render("servicios");
});

app.get("/sustentabilidad", function (req, res) {
   res.render("sustentabilidad");
});

app.get("/galeria", function (req, res) {
   res.render("galeria");
});

app.get("/contacto", function (req, res) {
   res.render("contacto");
});

app.get("*", function (req, res) {
   res.render("404");
});

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});