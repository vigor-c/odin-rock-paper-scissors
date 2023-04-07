const btn = document.querySelector(".begin-btn");
const question = document.querySelector(".text");
const buttons = document.querySelector(".buttons");
const rps = document.querySelectorAll(".rps")
const kita = document.querySelector(".kita")

function clickButton() {
    question.classList.add("invis");
    btn.classList.add("invis");
}

function removeTransition() {
    this.textContent = "PRESS ROCK PAPER OR SCISSORS";
    this.classList.remove("invis");
    buttons.removeChild(kita)
    rps.forEach(ran => ran.classList.remove("invis"))
}

function deleteButton(e) {
    if (e.propertyName !== "opacity") return;
    buttons.removeChild(btn);
}

btn.addEventListener("click", clickButton);
question.addEventListener("transitionend", removeTransition);
btn.addEventListener("transitionend", deleteButton);