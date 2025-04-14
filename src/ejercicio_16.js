//Escribir una función llamada sumarRango que reciba dos argumentos numéricos enteros: número inicial y número final. La función debe retornar la suma de los números en ese rango (incluyéndolos). El número inicial debe ser menor o igual que el número final. 

let numI = parseInt(prompt("Ingrese el limite inferior: "));
let numS = parseInt(prompt("Ingrese el limite superior: "));

const sumarRango = (a, b) =>{
    let suma = 0;
    for(let i=a; i<=b;i++)
        suma +=i
    return suma;
}

let sumaTotal = sumarRango(numI, numS);

alert(`La suma de los números entre ${numI} y ${numS} es: ${sumaTotal}`);