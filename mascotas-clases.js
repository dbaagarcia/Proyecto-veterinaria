// Creamos la clase Mascota
class Mascota {
    constructor(nombreMascota, nombreDueño, cedulaDueño, edadMascota, telefonoDueño, especialidad, medico) {
      this.nombreMascota = nombreMascota;
      this.nombreDueño = nombreDueño;
      this.cedulaDueño = cedulaDueño;
      this.edadMascota = edadMascota;
      this.telefonoDueño = telefonoDueño;
      this.especialidad = especialidad;
      this.medico = medico;
    }
  }
  
  // Creamos objetos de la clase Mascota que representan cada mascota
  let mascota1 = new Mascota("Luna", "Juan", "12345678", "3", "555-1234", "Medicina general", "Pepito");
  
  let mascota2 = new Mascota("Max", "María", "87654321", "5", "555-5678", "Cirugía veterinaria","Carlos");
  
  // Obtenemos la referencia de la tabla
  let tablaMascotas = document.getElementById("tabla-mascotas");
  let cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0];
  
  // Creamos una función que agrega una fila a la tabla para una mascota dada
  function agregarFilaMascota(mascota) {
    let fila = cuerpoTabla.insertRow();
    let celdaNombreMascota = fila.insertCell();
    celdaNombreMascota.textContent = mascota.nombreMascota;
    let celdaNombreDueño = fila.insertCell();
    celdaNombreDueño.textContent = mascota.nombreDueño;
    let celdaCedulaDueño = fila.insertCell();
    celdaCedulaDueño.textContent = mascota.cedulaDueño;
    let celdaEdadMascota = fila.insertCell();
    celdaEdadMascota.textContent = mascota.edadMascota;
    let celdaTelefonoDueño = fila.insertCell();
    celdaTelefonoDueño.textContent = mascota.telefonoDueño;
    let celdaEspecialidad = fila.insertCell();
    celdaEspecialidad.textContent = mascota.especialidad;
    let celdaMedico = fila.insertCell();
    celdaMedico.textContent = mascota.medico;
  }
  
  // Agregamos las filas correspondientes a cada mascota
  agregarFilaMascota(mascota1);
  agregarFilaMascota(mascota2);
