const express = require("express");
const router = express.Router();

// Conexión a la base de datos
const connection = require("./database/db");

// Envio de email
router.use("/", require("./email/email"));

// Rutas
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

router.get("*", function (req, res) {
   res.render("404");
});

module.exports = router;