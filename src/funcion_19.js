

const mostrarDatos = () => {
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const libreta = document.querySelector("#LU").value;

    alert(`Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`);
};

export { mostrarDatos };
