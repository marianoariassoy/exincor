const mysql = require('mysql2');

const connection = mysql.createConnection({
   host: 'j8oay8teq9xaycnm.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
   user: 'olqx4wg5brri3ppp',
   password: 'g5x0orwtlzzqimo6',
   database: 'yh24of7qy8a35wgm'
});

connection.connect((err) => {
   if (err) throw err;
   console.log("¡Conexión establecida!");
});

module.exports = connection;