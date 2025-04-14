//9. Solicitar al usuario que ingrese su nombre, luego muestre un mensaje de bienvenida: 
//Hola (aquí el nombre del usuario), bienvenido a Programación Visual! 

function mostrar_msj(){
    // trae el nombre de usuario y lo asigna a una variable
    let nombre = document.getElementById("nombre_usuario").value;

    if (nombre===""){   // valida que se ponga una cadenaa
        alert("Tiene que poner un nombre");
    }
    else{
    alert("Hola " + nombre + " , bienvenido a Programacion Visual!");
    }
}