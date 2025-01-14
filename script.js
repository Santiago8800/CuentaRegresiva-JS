const diasD = document.getElementById("Dias");
const horasH = document.getElementById("Horas");
const minutosM = document.getElementById("Minutos");
const segundosS = document.getElementById("Segundos");
//Año para contador
const añoNuevo = "1 January 2026";

function cuentaRegresiva() {
    const añonuevoFecha = new Date(añoNuevo);
    const fechaActual = new Date();

    const totalSegundos = (añonuevoFecha - fechaActual) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasD.innerHTML = dias;
    horasH.innerHTML = formatTime(horas);
    minutosM.innerHTML = formatTime(minutos);
    segundosS.innerHTML = formatTime(segundos);
}

function formatTime(tiempo) {
    return tiempo < 10 ? `0${tiempo}` : tiempo;
}

// initial call
cuentaRegresiva();

setInterval(countdown, 1000);
