function actualizarCapital() {
    const paisSeleccionado = document.getElementById("pais").value;
    const capitalSelect = document.getElementById("capital");

    const capitales = {
        "Argentina": "Buenos Aires",
        "Brasil": "Brasilia",
        "Chile": "Santiago",
        "Colombia": "Bogotá",
        "México": "Ciudad de México",
        "Perú": "Lima"
    };
    capitalSelect.innerHTML = "";

    if (paisSeleccionado) {
        const nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = capitales[paisSeleccionado];
        nuevaOpcion.textContent = capitales[paisSeleccionado];
        capitalSelect.appendChild(nuevaOpcion);
        capitalSelect.value = capitales[paisSeleccionado];
        console.log(`País seleccionado: ${paisSeleccionado}`);
        console.log(`Capital correspondiente: ${capitales[paisSeleccionado]}`);
    } else {
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "-- Selecciona una capital --";
        capitalSelect.appendChild(defaultOption);
    }
}
