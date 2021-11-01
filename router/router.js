//rutas
const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
   res.render("index");
});

router.get("/somos", function (req, res) {
   res.render("somos");
});

router.get("/servicios", function (req, res) {
   res.render("servicios");
});

router.get("/sustentabilidad", function (req, res) {
   res.render("sustentabilidad");
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