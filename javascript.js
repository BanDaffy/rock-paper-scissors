function game() {
    function getComputerChoice() {
        let choice = Math.floor(Math.random() * 3) + 1
        if (choice === 1) {
            return "rock"
        } else if (choice ===2) {
            return "paper"
        } else {
            return "scissors"
        }
    }
    function getPlayerChoice() {
        return (prompt()).toLowerCase()
    }
    function playRound(playerSelection, computerSelection) {
        if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
            ++playerScore
            console.log(`You Won! ${playerSelection} beats ${computerSelection}`)
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
        } else if (playerSelection === computerSelection) {
            console.log("Tie")
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
        } else {
            ++computerScore
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`)
            console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
        }
    }
    let playerScore = 0
    let computerScore = 0
    playRound(getPlayerChoice(),getComputerChoice())
    playRound(getPlayerChoice(),getComputerChoice())
    playRound(getPlayerChoice(),getComputerChoice())
    playRound(getPlayerChoice(),getComputerChoice())
    playRound(getPlayerChoice(),getComputerChoice())
}

game()