//14. Escribir una función llamada duplicar que reciba un arreglo de números y retorne un 
//nuevo arreglo donde cada número esté multiplicado por dos (2). 

function crear_arreglo(){
    let a = document.getElementById("numero_a").value;
    let b = document.getElementById("numero_b").value

    if(a==="" || b==="" ){  //verifica que haya numeros en los imput
        alert("Agrega numeros en cada input");
    }
    else{
        const arreglo = [a,b];  // se crea un arreglo con los calores que elije el usuario
        
        const  arreglo2 = [0,0];

        for(let i=0; i < arreglo.length;i++){   //recorre el primer arreglo y asigna cada nodo multiplicado por 2 a un nuevo arreglo
            arreglo2[i]=arreglo[i]*2;
        }

        let datos = document.getElementById("datos");// trae el div
    
        for(i = 0; i < arreglo2.length;i++){
            let p =document.createElement("p"); // crea el elemento p
            p.textContent = arreglo2[i]; //pone el valor actual del arreglo al p
            datos.appendChild(p); //agrega p al div y se muestra
        
        }
    }
}
