document.addEventListener("DOMContentLoaded", function () {
    const swappableContainer = document.getElementById("swapContainer");
    const swapText = document.querySelector(".swapText"); // Seleccionar el primer elemento con la clase "swapText"

    const phrases = [ "Software Developer", "Web Developer"]; // Frases a intercambiar
    let currentIndex = 0;

    function swapTexts() {
        swapText.classList.add("fade-out");
        setTimeout(() => {
            swapText.textContent = phrases[currentIndex];
            currentIndex = (currentIndex + 1) % phrases.length;
            swapText.classList.remove("fade-out");
        }, 500); // Espera 500 ms antes de cambiar las frases
    }

    setInterval(swapTexts, 3000);
});