let kilometros = parseFloat(prompt("Ingrese los kilómetros recorridos:"));

let litros = parseFloat(prompt("Ingrese los litros de combustible consumidos:"));


let Km = litros / kilometros;
document.write("Kilómetros recorridos: " + kilometros + "<br>");
document.write("Litros consumidos: " + litros + "<br>");
document.write("Consumo por kilómetro: " + Km.toFixed(2));