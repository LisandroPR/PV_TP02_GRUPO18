
export function iniciarMostrarTexto() {
    const entrada = document.getElementById('entradaTexto');
    const salida = document.getElementById('salidaTexto');
  
    entrada.addEventListener('input', () => {
      salida.textContent = entrada.value || 'El texto aqui';
    });
  }
  