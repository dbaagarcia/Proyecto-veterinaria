//cargar los datos de la cookie
const mascotasCookie = JSON.parse(getCookie('mascotas'));
const medicosCookie = JSON.parse(getCookie('medicos'));
const tablaMascotas = document.getElementById("tabla-mascotas");
const cuerpoTabla = tablaMascotas.getElementsByTagName("tbody")[0];
mascotasCookie.forEach(mascota => {
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
    medicosCookie.forEach(medico => {
        if (medico.especialidad == mascota.especialidad) {
            console.log(medico.especialidad)
            const medicoMascota = fila.insertCell();
            medicoMascota.textContent = medico.nombreMedico;
        }
    })
});



// Función para obtener el valor de una cookie
function getCookie(nombreCookie) {
    const name = nombreCookie + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}