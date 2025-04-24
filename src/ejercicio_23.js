//Construir una página web utilizando Html, Css y JavaScript que muestre un grupo de botones de opción (radio) con diferentes opciones. Al seleccionar una opción, el resultado debe mostrarse en tiempo real en otro elemento de la página (por ejemplo, un <p> o un <div>). Las opciones de los botones pueden ser por ejemplo lenguajes de programación. Crear al menos 3 botones de opción (radio). Mostrar el valor seleccionado en tiempo real en otro elemento visible. Aplicar estilos básicos con Css para una buena presentación. Usar JavaScript para capturar el evento change y actualizar el contenido dinámicamente. Mostrar el valor seleccionado también en la consola. 
const radios = document.querySelectorAll('input[name="equipo"]');

const resultado = document.getElementById('resultado');


radios.forEach(radio => {
    radio.addEventListener('change', () => {
        const valorSeleccionado = radio.value;
        resultado.textContent = `Elección: ${valorSeleccionado}`;
        console.log(`Elección: ${valorSeleccionado}`);
        });
});