// Ejercicio 17: Contar la letra 'a' en un texto ingresado por el usuario
// Este programa solicita al usuario que ingrese un texto y cuenta cuántas veces aparece la letra 'a' en él.    
function contarLetraA(texto) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}
let textoUsuario = prompt("Ingrese un texto:");
let resultado = contarLetraA(textoUsuario);
alert("La letra 'a' aparece " + resultado + " veces en el texto.");