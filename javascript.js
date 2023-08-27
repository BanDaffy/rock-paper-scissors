function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        return "Rock"
    } else if (choice ===2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        ++playerScore
        scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
        resultDiv.textContent = `You Won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === computerSelection) {
        scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
        resultDiv.textContent = "Tie"
    } else {
        ++computerScore
        scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
        resultDiv.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0
        computerScore = 0
        scoreDiv.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
        if (playerScore === 5) {
            resultDiv.textContent = "You Win!"
        } else {
            resultDiv.textContent = "You Lost!"
        }
    }
}

let playerScore = 0
let computerScore = 0

let scoreDiv = document.querySelector(".score")
let resultDiv = document.querySelector(".result")

let rockButton = document.querySelector(".rock")
let paperButton = document.querySelector(".paper")
let scissorsButton = document.querySelector(".scissors")

rockButton.addEventListener("click", () => {
    playRound("Rock",getComputerChoice())
})
paperButton.addEventListener("click", () => {
    playRound("Paper",getComputerChoice())
})
scissorsButton.addEventListener("click", () => {
    playRound("Scissors",getComputerChoice())
})
