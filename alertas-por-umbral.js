// Obtener los botones de "Crear Ticket" y los contenedores de los detalles del ticket
const btnCrearTicket1 = document.getElementById("btn-crear-ticket");
const ticketEvidencia1 = document.getElementById("ticket-evidencia");

const btnCrearTicket2 = document.getElementById("btn-crear-ticket2");
const alertaEvidencia2 = document.getElementById("alerta-evidencia");

// Función para mostrar los detalles del ticket 1
btnCrearTicket1.addEventListener("click", function () {
  // Mostrar los detalles del ticket
  ticketEvidencia1.style.display = "block";
  btnCrearTicket1.textContent = "Ticket Creado"; // Cambiar el texto del botón
  btnCrearTicket1.disabled = true; // Desactivar el botón
});

// Función para mostrar los detalles de la alerta 2
btnCrearTicket2.addEventListener("click", function () {
  // Mostrar los detalles del ticket
  alertaEvidencia2.style.display = "block";
  btnCrearTicket2.textContent = "Ticket Creado"; // Cambiar el texto del botón
  btnCrearTicket2.disabled = true; // Desactivar el botón
});
