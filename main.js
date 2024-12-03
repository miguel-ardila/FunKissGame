let noButton = document.getElementById("no-button");
let yesButton = document.getElementById("yes-button");
let message = document.getElementById("message");
let messageText = document.getElementById("message-text");
let pigGif = document.getElementById("pig-gif");

let hoverAttempts = 0;

noButton.addEventListener("mouseover", () => {
    hoverAttempts++;
    if (hoverAttempts < 7) {
        let randomX = Math.random() * 300 - 150;
        let randomY = Math.random() * 300 - 150;
        noButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    } else {
        // Mostrar el mensaje y el GIF después de 7 intentos
        message.classList.remove("hidden");
        pigGif.classList.add("visible");
    }
});

yesButton.addEventListener("click", () => {
    message.classList.remove("hidden");
    pigGif.classList.add("visible");
});
