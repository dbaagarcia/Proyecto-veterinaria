//cargar los datos de la cookie
const medicosCookie = JSON.parse(getCookie('medicos'));
let mascotasCookie = {}
try {
    mascotasCookie = JSON.parse(getCookie('mascotas'));
} catch (error) {
    console.log("No hay mascotas registradas")
}
const tablaMedicos = document.getElementById("tabla-medicos");
const cuerpoTabla = tablaMedicos.getElementsByTagName("tbody")[0];
medicosCookie.forEach(medico => {
    const fila = cuerpoTabla.insertRow();
    const nombreMedico = fila.insertCell();
    nombreMedico.textContent = medico.nombreMedico;
    const apellidoMedico = fila.insertCell();
    apellidoMedico.textContent = medico.apellidoMedico;
    const cedula = fila.insertCell();
    cedula.textContent = medico.cedula;
    const especialidad = fila.insertCell();
    especialidad.textContent = medico.especialidad;
    const consultorio = fila.insertCell();
    consultorio.textContent = medico.consultorio;
    const correoContacto = fila.insertCell();
    correoContacto.textContent = medico.correo;
    const telefonoMedico = fila.insertCell();
    telefonoMedico.textContent = medico.telefonoMedico;
    //colocar las mascotas que atiende el medico
    //mediante filter encontramos todas las mascotas que tienen esa especialidad
    let mascotasEncontradas = mascotasCookie.filter(mascota => medico.especialidad === mascota.especialidad);
    if (mascotasEncontradas.length > 0) {
        const medicoMascota = fila.insertCell();
        medicoMascota.innerHTML = `<ul id="pacientes"></ul>`
        const pacientes = medicoMascota.querySelector("#pacientes")
        mascotasEncontradas.forEach(mascota => {
            pacientes.innerHTML += `<li>${mascota.nombreMascota}</li>`;
        });
    } else {
        const medicoMascota = fila.insertCell();
        medicoMascota.textContent = "Sin pacientes";
    }
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