// Global Scopes
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const result = document.getElementById("result")

//Score Board Content
const computerWinsElem = document.getElementById("computer-wins");
const userWinsElem = document.getElementById("user-wins");

let computerWins = parseInt(computerWinsElem.innerText) || 0;
let userWins = parseInt(userWinsElem.innerText) || 0;

// Game Options selector
const gameOptions = ["Rock", "Paper", "Scissors"]


// Get Computer Choice
function getComputerChoice() {
    return gameOptions[Math.floor(Math.random() * 3)]
}

// Determinate Who Wins
function whoWins(userOption, computerOption) {
    if (computerOption === userOption) {
        return "Tie! 🔰";
    } else if (
        (userOption === "Rock" && computerOption === "Scissors") ||
        (userOption === "Paper" && computerOption === "Rock") ||
        (userOption === "Scissors" && computerOption === "Paper")
    ) {
        userWins++; // Increment user wins
        userWinsElem.innerText = userWins; // Update UI
        return "You Win! ✅";
    } else {
        computerWins++; // Increment computer wins
        computerWinsElem.innerText = computerWins; // Update UI
        return "You Lose! ❌";
    }
}

// Play Game Function

function playGame ( userOption ){

    const computerOption = getComputerChoice();
    const resultGame = whoWins(userOption,computerOption)

    document.getElementById("result").textContent = `
    👽 Player: ${userOption} VS
    💻 Computer: ${computerOption}
    Result:${resultGame}`
}

rockBtn.addEventListener("click", () => {playGame(gameOptions[0])})
paperBtn.addEventListener("click", () => {playGame(gameOptions[1])})
scissorsBtn.addEventListener("click", () => {playGame(gameOptions[2])})