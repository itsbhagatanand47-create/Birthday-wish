const messages = [
    "You make my life beautiful ❤️",
    "Every moment with you is special ✨",
    "I’m lucky to have you in my life didi💕",
    "Keep smiling always 😊",
    "I am with you forever"
];

let index = 0;
const messageBox = document.getElementById("messages");

function showMessage() {
    if (index < messages.length) {
        const p = document.createElement("p");
        p.innerText = messages[index];
        p.style.opacity = 0;
        p.style.transition = "0.8s";

        messageBox.appendChild(p);

        setTimeout(() => {
            p.style.opacity = 1;
        }, 100);

        index++;4
        setTimeout(showMessage, 2000);
    }
}

showMessage();

/* Floating hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);