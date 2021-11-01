const express = require("express");
const app = express();

//puerto
require('dotenv').config();
const port = process.env.PORT || 3000;

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + "/views/partials/");
app.set('view engine', 'hbs');

//Contenido estatico
app.use(express.static(__dirname + "/public"));

//Rutas web
app.use("/", require("./router/router"));

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});