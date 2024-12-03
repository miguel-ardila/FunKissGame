let noButton = document.getElementById("no-button");
let yesButton = document.getElementById("yes-button");
let message = document.getElementById("message");
let pigGif = document.getElementById("pig-gif");

let hoverAttempts = 0;

// Función para mover el botón
function moveNoButton() {
    hoverAttempts++;
    if (hoverAttempts < 7) {
        let randomX = Math.random() * 200 - 100; // Ajusta el rango según tu diseño
        let randomY = Math.random() * 200 - 100;

        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else {
        message.classList.remove("hidden");
        pigGif.style.display = "block";
    }
}

// Manejo de eventos
noButton.addEventListener("mouseover", moveNoButton); // Para dispositivos con mouse
noButton.addEventListener("touchstart", moveNoButton); // Para dispositivos táctiles

yesButton.addEventListener("click", () => {
    message.classList.remove("hidden");
    pigGif.style.display = "block";
});
