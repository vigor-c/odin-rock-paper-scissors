const btn = document.querySelector(".begin-btn");
const question = document.querySelector(".text");
const you = document.querySelector(".you");
const computer = document.querySelector(".computer");
const buttons = document.querySelector(".buttons");
const rps = document.querySelectorAll(".rps");
const kita = document.querySelector(".kita");
const userPoints = document.createElement("div");
const computerPoints = document.createElement("div");
const playAgain = document.createElement("button")
let game = 0;
let wTime = 0;

you.appendChild(userPoints);
computer.appendChild(computerPoints);
userPoints.classList.add("points-style");
computerPoints.classList.add("points-style");
userPoints.textContent = "0"
computerPoints.textContent = "0"
userPoints.classList.add("invis")
computerPoints.classList.add("invis")
playAgain.classList.add("invis")

function reloadPage(){
    window.location.reload();
}

function clickButton() {
    question.classList.add("invis");
    btn.classList.add("invis");
}

function removeTransition() {
    if (wTime === 0){
        this.textContent = "PRESS ROCK PAPER OR SCISSORS";
        this.classList.remove("invis");
        buttons.removeChild(kita);
        rps.forEach(ran => ran.classList.remove("invis"));
        userPoints.classList.remove("invis");
        computerPoints.classList.remove("invis");
    }
    wTime++
}

function deleteButton(e) {
    if (e.propertyName !== "opacity") return;
    buttons.removeChild(btn);
}

function kurcina(e) {
    console.log(e)
};

function playGame(e) {
    let playerChoice;
    let computerChoice = Math.floor(Math.random() * 3);
    if (this === rps[0]) {
        playerChoice = 0;
    } else if (this === rps[1]) {
        playerChoice = 1;
    } else if (this === rps[2]) {
        playerChoice = 2;
    };

    if (computerChoice === playerChoice) {
        question.textContent = "It's a draw";
    } else if (computerChoice === 0 && playerChoice === 1 || computerChoice === 1 && playerChoice === 2 || computerChoice === 2 && playerChoice === 0) {
        question.textContent = "You won this one!";
        userPoints.textContent = Number(userPoints.textContent) + 1;
        game++;
    } else if (computerChoice === 0 && playerChoice === 2 || computerChoice === 1 && playerChoice === 0 || computerChoice === 2 && playerChoice === 1) {
        question.textContent = "The computer won this one!";
        computerPoints.textContent = Number(computerPoints.textContent) + 1;
        game++;
    };
    console.log(game)
    if (game === 5){
        question.classList.add("invis")
        rps.forEach(butt => butt.classList.add("invis"))

        setTimeout(function(){
            question.textContent = "That's it! Press play again if you want to play again!";
        }, 500);
        setTimeout(function(){
            question.classList.remove("invis");
        }, 500);
        setTimeout(function(){
            rps.forEach(butt => buttons.removeChild(butt));
        }, 500);
        setTimeout(function(){
            buttons.appendChild(playAgain);
        }, 500);
        playAgain.textContent = "Play Again"
        setTimeout(function(){
            playAgain.classList.remove("invis")
        }, 500);
    }
}

btn.addEventListener("click", clickButton);
question.addEventListener("transitionend", removeTransition);
btn.addEventListener("transitionend", deleteButton);
rps[0].addEventListener("click", playGame);
rps[1].addEventListener("click", playGame);
rps[2].addEventListener("click", playGame);

playAgain.addEventListener("click", reloadPage)