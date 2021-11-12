const express = require("express");
const nodemailer = require("nodemailer");
const email = express.Router();

// Envio de email
email.post("/send_mail", function (req, res) {
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
          user: 'cleta.greenholt56@ethereal.email',
          pass: 'NC5mdAPY13YCgqQqws'
      }
   });

   const mailOptions = {
      form: email,
      to: "naranjaspintadas@gmail.com",
      subject: "Contacto",
      html: `Consulta de <strong>${nombre} ${apellido}</strong> <br>
      Celular: <strong>${celular}</strong> <br> Email: <strong>${email}</strong> <br> 
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

module.exports = email;
