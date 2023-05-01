// Creamos un arreglo con datos de mascotas
let mascotas = [
    {
        nombreMascota: "Luna",
        nombreDueño: "Juan",
        cedulaDueño: "12345678",
        edadMascota: "3 años",
        telefonoDueño: "3125010308",
        especialidad: "Medicina general",
        medico: "Pepito"
    },
    {
        nombreMascota: "Max",
        nombreDueño: "María",
        cedulaDueño: "87654321",
        edadMascota: "5 años",
        telefonoDueño: "3012345678",
        especialidad: "Cirugía veterinaria",
        medico: "Carlos"
    },
    {
        nombreMascota: "Pelusa",
        nombreDueño: "Pedro",
        cedulaDueño: "24681357",
        edadMascota: "2 meses",
        telefonoDueño: "3159876543",
        especialidad: "Dermatología veterinaria",
        medico: "Juana"
    }
];

// Seleccionamos la tabla y el cuerpo de la tabla
let tablaMascotas = document.getElementById("tabla-mascotas");
let cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0];

// Recorremos el arreglo de mascotas y creamos una fila por cada una
for (let i = 0; i < mascotas.length; i++) {
    let mascota = mascotas[i];

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
    celdaNombreMascota.textContent = mascota.nombreMascota;
    celdaNombreDueño.textContent = mascota.nombreDueño;
    celdaCedulaDueño.textContent = mascota.cedulaDueño;
    celdaEdadMascota.textContent = mascota.edadMascota;
    celdaTelefonoDueño.textContent = mascota.telefonoDueño;
    celdaEspecialidad.textContent = mascota.especialidad;
    celdaMedico.textContent = mascota.medico;
}

