var playerChoice = "Rock"
var computerChoices = ["Rock", "Paper", "Scissors"]

var computerChoice = computerChoices[Math.floor(computerChoice.length * Math.random())];

//Tie
if (computerChoice == playerChoice){
console.log("It's a tie")
}

//Computer = Paper and Player = Rock
else if(computerChoice == "Paper" && player == "Rock"){
console.log("You lose!!")
}

//Computer = Scissors and Player = Rock
else if(computerChoice == "Scissors" && player == "Rock"){
console.log("You win!!")
}

//Computer = Rock and Player = Scissors
else if(computerChoice == "Rock" && player == "Scissor"){
console.log("You lose!!")
}

//Computer = Rock and Player = Paper
else if(computerChoice == "Rock" && player == "Paper"){
console.log("You win!!")
}

//Computer = Scissors and Player = Paper
else if (computerChoice == "Scissors" && player == "Paper"){
console.log("You lose!!")
}

//Computer = Paper and Player = Scissors
else{
console.log("You win!!")
}
