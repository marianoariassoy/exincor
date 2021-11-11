const express = require("express");
const hbs = require('hbs');
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extend:false}));
app.use(express.static(__dirname + "/public"));

// Puerto
require('dotenv').config();
const port = process.env.PORT || 5000;

// Motor de plantilla
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + "/views/partials/");

// Router
app.use("/", require("./router"));

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});