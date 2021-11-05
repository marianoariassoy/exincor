const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extend:false}));

//puerto
require('dotenv').config();
const port = process.env.PORT || 5000;

//motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + "/views/partials/");
app.set('view engine', 'hbs');

//contenido estatico
app.use(express.static(__dirname + "/public"));

//router
app.use("/", require("./router"));

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});