let game = 0

while (game < 5){
        let computerChoice = Math.floor(Math.random() * 3);
        let playerSelection = prompt("Enter rock, paper, scissors or cancel to stop the game: ");

        if (playerSelection === null){
            break
        } else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors"){
            console.log("Please enter a valid option.")
            continue
        } else if (computerChoice === 0 && playerSelection === "rock" || computerChoice === 1 && playerSelection === "paper" || computerChoice === 2 && playerSelection === "scissors"){
            console.log(`The computer chose: ${computerChoice} and the player chose: ${playerSelection}`)
            console.log("It's a draw!")
            game++
            continue
        } else if (computerChoice === 0 && playerSelection === "paper" || computerChoice === 1 && playerSelection === "scissors" || computerChoice === 2 && playerSelection === "rock"){
            console.log(`The computer chose: ${computerChoice} and the player chose: ${playerSelection}`)
            console.log("The player won!")
            game++
            continue
        } else {
            console.log(`The computer chose: ${computerChoice} and the player chose: ${playerSelection}`)
            console.log("The computer won!")
            game++
            continue
        }
}