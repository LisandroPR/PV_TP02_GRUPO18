export default function tiempo_real() {

    salida.textContent = entrada.value;
    if (entrada.value.length > 20){         //length para saber la longitud de la cadena, devuelve un numero 
            salida.style.backgroundColor = "red";   // si es mayor a 20 la longitus el fondo del div(salida) se vuelve rojo
    }
    else{
        salida.style.backgroundColor = "rgb(117, 117, 117";
    }
}