// Creamos arreglos con datos de mascotas
let nombresMascotas = ["Luna", "Max", "Pelusa"];
let nombresDueños = ["Juan", "María", "Pedro"];
let cedulasDueños = ["12345678", "87654321", "24681357"];
let edadesMascotas = ["3 años", "5 años", "2 meses"];
let telefonosDueños = ["3125010308", "3012345678", "3159876543"];
let especialidades = ["Medicina general", "Cirugía veterinaria", "Dermatología veterinaria"];
let nombreDoctor = ["Pepito","Carlos","Juana"]

// Seleccionamos la tabla y el cuerpo de la tabla
let tablaMascotas = document.getElementById("tabla-mascotas");
let cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0];

// Recorremos los arreglos de datos y creamos una fila por cada uno
for (let i = 0; i < nombresMascotas.length; i++) {
  // Creamos una nueva fila y le añadimos las celdas correspondientes
  let fila = cuerpoTabla.insertRow();
  let celdaNombreMascota = fila.insertCell();
  let celdaNombreDueño = fila.insertCell();
  let celdaCedulaDueño = fila.insertCell();
  let celdaEdadMascota = fila.insertCell();
  let celdaTelefonoDueño = fila.insertCell();
  let celdaEspecialidad = fila.insertCell();
  let celdaMedico = fila.insertCell();

  // Añadimos el contenido de cada celda con los datos de la mascota correspondiente
  celdaNombreMascota.textContent = nombresMascotas[i];
  celdaNombreDueño.textContent = nombresDueños[i];
  celdaCedulaDueño.textContent = cedulasDueños[i];
  celdaEdadMascota.textContent = edadesMascotas[i];
  celdaTelefonoDueño.textContent = telefonosDueños[i];
  celdaEspecialidad.textContent = especialidades[i];
  celdaMedico.textContent = nombreDoctor[i];
}
