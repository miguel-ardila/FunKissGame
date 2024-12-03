let noButton = document.getElementById("no-button");
let yesButton = document.getElementById("yes-button");
let message = document.getElementById("message");

let hoverAttempts = 0;

noButton.addEventListener("mouseover", () => {
    hoverAttempts++;
    if (hoverAttempts < 20) {
        // Mover el botón "No" a una posición aleatoria
        let randomX = Math.random() * 300 - 150; // Ajustar el rango para evitar que salga de la pantalla
        let randomY = Math.random() * 300 - 150;

        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else {
        // Mostrar el mensaje automáticamente al cuarto intento
        message.classList.remove("hidden");
    }
});

yesButton.addEventListener("click", () => {
    // Mostrar el mensaje final
    message.classList.remove("hidden");
});
