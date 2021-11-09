// Rutas
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// Base de datos
const connection = require("./database/db");

router.get("/", function (req, res) {
   res.render("index");
});

router.get("/somos", (req, res) => {
   let sql = "SELECT texto FROM textos WHERE id = 1";
   let query = connection.query(sql, (err, results) => {
      if (err) throw err;
      res.render("somos", {
         texto: results[0].texto
      });
   });
});

router.get("/servicios", (req, res) => {
   let sql = "SELECT * FROM servicios";
   let query = connection.query(sql, (err, results) => {
      if (err) throw err;
      res.render("servicios", {
         results: results,
      });
   });
});

router.get("/sustentabilidad", (req, res) => {
   let sql = "SELECT texto FROM textos WHERE id = 2";
   let query = connection.query(sql, (err, results) => {
      if (err) throw err;
      res.render("sustentabilidad", {
         texto: results[0].texto
      });
   });
});

router.get("/galeria", function (req, res) {
   res.render("galeria");
});

router.get("/contacto", function (req, res) {
   res.render("contacto");
});

// Envio email
router.post("/send_mail", function (req, res) {
   const nombre = req.body.nombre;
   const apellido = req.body.apellido;
   const celular = req.body.celular;
   const email = req.body.email;
   const ciudad = req.body.ciudad;
   const pais = req.body.pais;
   const mensaje = req.body.mensaje;

   const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
         user: 'edwardo.kutch82@ethereal.email',
         pass: 'c1r3q1PT8QuCy4hCsJ'
      }
   });

   const mailOptions = {
      form: email,
      to: "hola@marianoarias.soy",
      subject: "Contacto",
      html: `Nombre: <strong>${nombre} ${apellido}</strong> <br>
      Celular: <strong>${celular}</strong>, Email: <strong>${email}</strong> <br> 
      Ciudad: <strong>${ciudad}</strong>,  Pais: <strong>${pais}</strong> <br> 
      Mensaje: <strong>${mensaje}</strong>`
   };

   transporter.sendMail(mailOptions, (err, info)=>{
      if(err) {
         res.status(500).send(err.message);
      } else {
         console.log("Email enviado");
         res.render("contacto_ok");
      }
   }) 

});

router.get("*", function (req, res) {
   res.render("404");
});

module.exports = router;