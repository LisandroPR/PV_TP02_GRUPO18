import { coloresSuaves } from "/PV_TP02_GRUPO18/src/moduloejercicio24.js";

function cambiarColor() {
    const colorAleatorio = coloresSuaves[Math.floor(Math.random() * coloresSuaves.length)];
    document.body.style.backgroundColor = colorAleatorio;
    console.log(`Color de fondo cambiado a: ${colorAleatorio}`);
}

// Agrega el evento al botón
document.getElementById("nuevoColorBtn").addEventListener("click", cambiarColor);
