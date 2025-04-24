import { paisCapital } from "../src/moduloejercicio20.js";

const seleccionPais= document.getElementById("pais");
const seleccionCapital= document.getElementById("capital");

seleccionPais.addEventListener("change",()=>{
    
    const paisSeleccionado = seleccionPais.value;

    if(paisSeleccionado && paisCapital[paisSeleccionado]){
        const capital = paisCapital[paisSeleccionado];
        seleccionCapital.disabled=false;
        seleccionCapital.innerHTML=`<option value="${capital}">${capital}</option>`;
        console.log(`Pais seleccionado: ${paisSeleccionado}`);
        console.log(`Su capital es: ${capital}`);

    }else{
    seleccionCapital.disabled = true;
    seleccionCapital.innerHTML=`<option value="">Seleccionar una capital</option>`;

    }

});