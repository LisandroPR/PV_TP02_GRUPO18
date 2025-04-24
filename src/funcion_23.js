
export function seleccionEquipo() {
    const radios = document.querySelectorAll('input[name="equipo"]');
    const resultado = document.getElementById('resultado');

    radios.forEach(radio => {
        radio.addEventListener('change', () => {
            const seleccionado = radio.value;
            resultado.textContent = `Resultado elegido: ${seleccionado}`;
            console.log(`Resultado elegido: ${seleccionado}`);
        });
    });
}
