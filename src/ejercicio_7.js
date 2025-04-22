//Declarar un array denominado nombres con al menos 6 nombres. Obtener el nombre más largo del array nombres.  Las cadenas de textos (String) son listas de caracteres y las listas tienen un largo (length) que indica su tamaño.

let nombres = ["Jose", "Maria", "Juan", "Isabel", "Fernando", "Carmen", "Valentina"];

let nombreMasLargo = "";
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
        nombreMasLargo = nombres[i];
    }
}
alert(nombreMasLargo);