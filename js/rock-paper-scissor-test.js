//Global Scopes
const rockBtn = document.getElementById("rock")
const paperBtn = document.getElementById("paper")
const scissorsBtn = document.getElementById("scissors")
const resultText = document.getElementById("result")

const options = ["Rock", "Paper", "Scissors"]

// Player & Computer Choices
const computerChoices = options[Math.floor(Math.random() * 3)];


//Get Player Input
rockBtn.addEventListener("click", function() {

    const userPick = options[0];
    const computerPick = computerChoices;
    const gameResult = whoWins(computerChoices, userPick);

    console.log("You pick " + userPick)
    console.log("Computer pick " + computerChoices)

    resultText.textContent = `
    You picked: ${userPick}.
    Computer choose: ${computerPick}.
    That's a ${gameResult}`

})
paperBtn.addEventListener("click", function() {
    console.log("You pick Paper!")
    return options[1];
})
scissorsBtn.addEventListener("click", function() {
    console.log("You pick Scissors!")
    return "Scissors";
})

// Determinate Winner 

function whoWins ( computerChoice, playerChoice ) {
    if ( computerChoice === playerChoice ) {
        return 'Tie'
    } else if (
    ( playerChoice === "Rock" && computerChoice === "Scissors" ) ||
    ( playerChoice === "Scissors" && computerChoice === "Paper" ) ||
    ( playerChoice === "Paper" && computerChoice === "Rock" ) 
    ) {
        return "You Win!"
    } else {
        return "You Loose!";
    }
}

// Play the Game

function playGame(playerChoice) {

    const computerChoice = getComputerChoice();

    const result = whoWins( computerChoice, playerChoice );

    return result;

}
