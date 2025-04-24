//Crear una página que muestre 3 campos (input): Nombre, apellido, libreta universitaria.  Crear un script para obtener cada uno de los elementos input creados, mediante el método querySelector(), manipular los elementos para obtener su valor con la propiedad JS value y mostrar los datos con un alert de la siguiente forma: 
// “Los datos ingresados son: 
// Nombre: María 
// Apellido: Diaz 
// Libreta Universitaria: APU999999

import { mostrarDatos } from './funcion_19.js';

document.querySelector("#btnMostrar").addEventListener("click", mostrarDatos);
