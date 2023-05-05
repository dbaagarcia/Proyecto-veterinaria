//cargar los datos de la cookie
const mascotasCookie = JSON.parse(getCookie('mascotas'));
const medicosCookie = JSON.parse(getCookie('medicos') || "[]");
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
    //colocar el medico que va a tratar la mascota
    //mediante find encontramos el medico que tenga la especialidad
    const medicoEspecialidad = medicosCookie.find(medico => medico.especialidad === mascota.especialidad);
    const medicoMascota = fila.insertCell();
    medicoMascota.textContent = medicoEspecialidad ? medicoEspecialidad.nombreMedico : "Por asignar";
});



// Función para obtener el valor de una cookie
function getCookie(nombreCookie) {
    const name = nombreCookie + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (let cookie of ca) {
        cookie = cookie.trim();
        if (cookie.startsWith(name)) {
            return cookie.substring(name.length);
        }
    }

    return "";
}