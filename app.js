const express = require("express");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extend:false}));

// Puerto
require('dotenv').config();
const port = process.env.PORT || 5000;

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + "/views/partials/");
app.set('view engine', 'hbs');

// Contenido estatico
app.use(express.static(__dirname + "/public"));

// Router
app.use("/", require("./router"));

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});