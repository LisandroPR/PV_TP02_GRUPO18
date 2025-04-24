function calcularMayor(numero1, numero2) {
    if (numero1 > numero2) {
        alert(`El número mayor es: ${numero1}`);
    } else if (numero2 > numero1) {
        alert(`El número mayor es: ${numero2}`);
    } else {
        alert("Los números ingresados son iguales.");
    }
}

calcularMayor(13,15);
