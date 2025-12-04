// Obtener los elementos del formulario y del mensaje
const form = document.getElementById("form-reporte");
const mensajeGenerado = document.getElementById("mensaje-reporte-generado");
const btnDescargarReporte = document.getElementById("descargar-reporte");
const trimestreSeleccionado = document.getElementById("trimestre-seleccionado");

// Cuando el formulario se envíe
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener el trimestre seleccionado y otros datos
  const trimestre = document.getElementById("trimestre").value;
  const ahorro = document.getElementById("ahorro").value;
  const iniciativas = document.getElementById("iniciativas").value;
  const riesgos = document.getElementById("riesgos").value;
  const proximosPasos = document.getElementById("proximos-pasos").value;

  // Validar si los campos están completos
  if (!ahorro || !iniciativas || !riesgos || !proximosPasos) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Mostrar el mensaje de éxito
  trimestreSeleccionado.textContent = trimestre; // Mostrar trimestre seleccionado
  mensajeGenerado.style.display = "block"; // Mostrar el mensaje de reporte generado

  // Simulación de la descarga del reporte PDF
  // (aquí deberías usar jsPDF o un backend para generar el archivo real)
  btnDescargarReporte.href = "reporte_ejecutivo.pdf"; // Enlace simulado de descarga
});
