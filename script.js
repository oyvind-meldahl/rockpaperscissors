const gameBoard = document.querySelector(".gameboard")
const result = document.querySelector(".result")
const tableComputer = document.querySelector(".computer-results")
const tablePlayer = document.querySelector(".player-results")
const tableTotal = document.querySelector(".number-games")
let playerScore = 0
let computerScore = 0
let numberOfGames = 0
const hands = ["Rock", "Paper", "Scissors"]
const rockButton = document.querySelector(".rock")
const paperButton = document.querySelector(".paper")
const scissorsButton = document.querySelector(".scissors")

var playersChoice = ""
var aiChoice = ""

rockButton.addEventListener("click", chooseRock)
paperButton.addEventListener("click", choosePaper)
scissorsButton.addEventListener("click", chooseScissors)

function chooseRock() {
    playersChoice = "Rock"
     randomizer(hands)
}

function choosePaper() {
    playersChoice = "Paper"
    randomizer(hands)
}

function chooseScissors() {
    playersChoice = "Scissors"
    randomizer(hands)
}

function randomizer(hands) {
     aiChoice = hands[Math.floor(Math.random()*hands.length)]
     numberOfGames += 1
     tableTotal.innerHTML = numberOfGames 
     gameBoard.innerHTML = "The computer chose " + aiChoice

     if (playersChoice === aiChoice) {
        result.innerHTML = "You both chose the same thing, it's a TIE!"
     } else if (playersChoice === "Rock" && aiChoice === "Scissors") {
        result.innerHTML = "Rock beats scissors, YOU WIN!"
        playerScore += 1
        tablePlayer.innerHTML = playerScore
     } else if (playersChoice === "Paper" && aiChoice === "Rock") {
        result.innerHTML = "Paper beats rock, YOU WIN!"
        playerScore += 1
        tablePlayer.innerHTML = playerScore
     } else if (playersChoice === "Scissors" && aiChoice === "Paper") {
        result.innerHTML = "Scissors beat paper, YOU WIN!"
        playerScore += 1
        tablePlayer.innerHTML = playerScore
     } else {
        result.innerHTML = "You loooooose."
        computerScore += 1
        tableComputer.innerHTML = computerScore 
     }
}