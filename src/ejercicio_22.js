
import tiempo_real from "./funcion_ej22.js";    //se importa la funcion

const entrada = document.getElementById("entrada");     // se asigna la variable entrada del input y la variable salida del div
const salida = document.getElementById("salida");

entrada.addEventListener( "input", () => {  //evento listener de input

   tiempo_real();
   
})