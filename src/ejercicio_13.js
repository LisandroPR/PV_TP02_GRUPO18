//13. Escribir una función llamada mostrarArreglo que reciba un arreglo numérico como 
//parámetro e imprima cada elemento en una línea a parte.


const numeros = [1,2,3,4,5,6,7,8,9,10];

function mostrarArreglo(numeros){
    const datos = document.getElementById("datos"); //trae al elemento div

    for(let i = 0; i < numeros.length;i++){
        let p =document.createElement("p"); // crea el elemento p
        p.textContent = numeros[i]; //pone el valor actual del arreglo al p
        datos.appendChild(p); //agrega p al div y se muestra
    
    }
}

