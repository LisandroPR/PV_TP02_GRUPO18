function retornarMes(numero) {
    const meses = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    if (numero >= 1 && numero <= 12) {
      return meses[numero - 1];
    } else {
      return 'No es un mes válido';
    }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const boton = document.getElementById('mostrarBtn');
    boton.addEventListener('click', () => {
      const valor = parseInt(document.getElementById('mesInput').value);
      const resultado = retornarMes(valor);
      document.getElementById('resultado').textContent = resultado;
      
    });
  });