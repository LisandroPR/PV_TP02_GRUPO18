// Ejercicio 12: Escribir un programa que pida un número y determine si es par o impar.
let numero = parseInt(prompt("Ingrese un número:"));
if (numero % 2 === 0) {
    alert("El número " + numero + " es par.");
} else {
    alert("El número " + numero + " es impar.");
}