// Cargar el archivo JSON con los datos de las mascotas
fetch('datos_mascotas.json')
    .then(response => response.json())
    .then(data => {
        const tablaMascotas = document.getElementById("tabla-mascotas");
        const cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0];
        for (let i = 0; i < data.length; i++) {
            const mascota = data[i];
            const fila = cuerpoTabla.insertRow();
            const nombreMascota = fila.insertCell();
            nombreMascota.textContent = mascota.nombreMascota;
            const nombreDueño = fila.insertCell();
            nombreDueño.textContent = mascota.nombreDueño;
            const cedulaDueño = fila.insertCell();
            cedulaDueño.textContent = mascota.cedulaDueño;
            const edadMascota = fila.insertCell();
            edadMascota.textContent = mascota.edadMascota;
            const telefonoDueño = fila.insertCell();
            telefonoDueño.textContent = mascota.telefonoDueño;
            const especialidad = fila.insertCell();
            especialidad.textContent = mascota.especialidad;
            const medico = fila.insertCell();
            medico.textContent = mascota.medico;
        }
    })
    .catch(error => console.error(error));//control de errores
