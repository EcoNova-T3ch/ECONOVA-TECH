document
  .getElementById("cierre-turno-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de los campos
    const consumoConsolidado =
      document.getElementById("turno-consolidado").value;
    const validacion = document.getElementById("validacion").value;

    // Verificar si los campos están completos
    if (!consumoConsolidado || !validacion) {
      // Si falta algún campo, mostrar el mensaje de error
      document.getElementById("mensaje-error").style.display = "block";
      document.getElementById("mensaje-exito").style.display = "none";
    } else {
      // Si todos los campos están completos, proceder con el cierre de turno
      document.getElementById("mensaje-error").style.display = "none";
      document.getElementById("mensaje-exito").style.display = "block";

      // Simulación de la creación del reporte PDF
      // (en un sistema real, usaríamos una librería como jsPDF para generar el PDF)
      const descargarReporte = document.getElementById("descargar-reporte");
      descargarReporte.href = "reporte.pdf"; // El enlace para descargar el reporte

      // Aquí puedes agregar la lógica para registrar el cierre del turno en el historial (si es necesario)
    }
  });
// Obtener el botón de "Crear Ticket" y el contenedor de los detalles del ticket
// Obtener el botón de "Crear Ticket" y el contenedor de los detalles del ticket
const btnCrearTicket = document.getElementById("btn-crear-ticket");
const ticketEvidencia = document.getElementById("ticket-evidencia");

// Evento para crear el ticket
btnCrearTicket.addEventListener("click", function () {
  // Mostrar los detalles del ticket
  ticketEvidencia.style.display = "block"; // Mostrar el contenedor de detalles del ticket

  // Cambiar el texto del botón y deshabilitarlo después de hacer clic
  btnCrearTicket.textContent = "Ticket Creado"; // Cambiar texto del botón
  btnCrearTicket.disabled = true; // Desactivar el botón para evitar múltiples clics
});

// Obtener los elementos necesarios
const btnDescargarReporte = document.getElementById("descargar-reporte");
const firmaReporte = document.getElementById("firma-reporte");
const btnFirmarReporte = document.getElementById("btn-firmar-reporte");
const mensajeReporteFirmado = document.getElementById(
  "mensaje-reporte-firmado"
);

// Mostrar el botón de firmar cuando se haga clic en "Descargar reporte"
btnDescargarReporte.addEventListener("click", function (event) {
  event.preventDefault(); // Prevenir que se descargue el reporte directamente
  firmaReporte.style.display = "block"; // Mostrar el botón de firmar
  btnDescargarReporte.style.display = "none"; // Ocultar el enlace de descarga
});

// Lógica para firmar el reporte
btnFirmarReporte.addEventListener("click", function () {
  // Simulación de la firma del reporte
  mensajeReporteFirmado.style.display = "block"; // Mostrar el mensaje de "Reporte firmado"
  firmaReporte.style.display = "none"; // Ocultar el botón de firmar
  btnDescargarReporte.style.display = "block"; // Mostrar el enlace para descargar el reporte firmado
  btnDescargarReporte.textContent = "Descargar reporte firmado"; // Cambiar el texto del enlace
});
