
// Abre y cierra el nav
const menu = document.getElementById("menu");
const close = document.getElementById("close");
const nav = document.getElementById("nav");

menu.addEventListener("click", function(evento){
   nav.style.display = 'flex';
});

close.addEventListener("click", function(evento){
   nav.style.display = 'none';
});

// Validación del formaulario de contacto
function formulario() {
   const nombre = document.getElementById("nombre").value;
   const apellido = document.getElementById("apellido").value;
   const email = document.getElementById("email").value;
   const celular = document.getElementById("celular").value;
   const mensaje = document.getElementById("mensaje").value;

   if (nombre == null || nombre.length == 0) {
      alert("Por favor ingrese su nombre");
      return false;
   }
   if (apellido == null || apellido.length == 0) {
      alert("Por favor ingrese su apellido");
      return false;
   }
   if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Por favor ingrese un email válido");
      return false;
   }
   if (celular == null || celular.length == 0 || isNaN(celular)) {
      alert("Por favor ingrese un número de telefono");
      return false;
   }
   if (mensaje == null || mensaje.length == 0) {
      alert("Por favor ingrese un mensaje")
      return false;
   }
   return true;
}