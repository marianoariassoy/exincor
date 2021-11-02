const express = require("express");
const app = express();
const bodyParser = require("body-parser");

//puerto
require('dotenv').config();
const port = process.env.PORT || 3000;

// Motor de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + "/views/partials/");
app.set('view engine', 'hbs');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extend:false}));

//Contenido estatico
app.use(express.static(__dirname + "/public"));

//Rutas web
app.use("/", require("./router/router"));

// const mysql = require('mysql');
// const connection = mysql.createConnection({
//    host: '192.168.64.2',
//    user: 'root',
//    password: '',
//    database: 'exincor',
//    mysql_socket : '/opt/lampp/var/mysql/mysql.sock'
// });
// connection.connect(function(error) {
//    if(error) {
//       throw error;
//    } else {
//       console.log('Conexion correcta.');
//    }
// });
// connection.end();

app.listen(port, () => {
   console.log(`App listening at http://localhost:${port}`);
});