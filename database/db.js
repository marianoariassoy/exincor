const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: 'localhost',
   user: 'root',
   password: 'Verano22',
   database: 'exincor'
});

connection.connect((err) => {
   if (err) throw err;
   console.log("¡Conexión establecida!");
});

module.exports = connection;