const colors = ["#ff5733", "#33ff57", "#3357ff", "#ff33a1", "#a133ff", "#33ffa1"];
const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    console.log(`El color de fondo ha cambiado a: ${randomColor}`);
});
