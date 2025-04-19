document.addEventListener('DOMContentLoaded', () => {
    const entrada = document.getElementById('entradaTexto');
    const salida = document.getElementById('salidaTexto');
  
    entrada.addEventListener('input', () => {
      salida.textContent = entrada.value || 'Aquí se mostrará el texto.';
    });
  });
  