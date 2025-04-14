//Solicitar al usuario que ingrese tres números enteros, luego mostrar como resultado el promedio de los tres. El promedio de tres números se calcula sumando los tres números y dividiendo entre 3.

let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
let num3 = parseInt(prompt("Ingrese el tercer numero: "));

let promedio = (num1 + num2 + num3) / 3;

alert("El promedio de los tres numeros es: " + promedio);