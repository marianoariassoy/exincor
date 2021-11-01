
//Muestra y cierra el nav
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.getElementById("nav");

menu.addEventListener("click", function(evento){
   nav.style.display = 'flex';
});

close.addEventListener("click", function(evento){
   nav.style.display = 'none';
});