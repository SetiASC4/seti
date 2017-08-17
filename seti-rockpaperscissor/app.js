var score = 0;

var play = function (userChoice) {

    document.getElementById("player").innerHTML = "";
    document.getElementById("opponent").innerHTML = "";
    document.getElementById("results").innerHTML = "";


    if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
        document.getElementById("player").innerHTML = '';
    } else if (userChoice == "rope") {
        document.getElementById("player").innerHTML = '';
    } else {
        document.getElementById("player").innerHTML = "That is not a valid choice, try again.";

        return false;
    }

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    document.getElementById("opponent").innerHTML = '';

    var compare = function (choice1, choice2) {
        if (choice1 == choice2) {
            return "The result is a tie!";
        } else if (choice1 == "rock") {
            if (choice2 == "scissors") {
                score++;
                return "You win!";
            } else {
                return "You lose!";
            }
        } else if (choice1 == "paper") {
            if (choice2 == "rock") {
                score++;
                return "You win!";
            } else {
                return "You lose!";
            }
        } else if (choice1 == "scissors") {
            if (choice2 == "rock") {
                return "You lose!";
            } else {
                score++;
                return "You win!";
            }
        } else if (choice1 == "rope") {
            score++;
            return "rope FTW";
        } else {
            return "error. bummer dude. game over. no dice.";
        }
    };

    var winner = compare(userChoice, computerChoice);
    document.getElementById("results").innerHTML = winner;
    document.getElementById("score").innerHTML = score;

    if (score > 99) {
        document.getElementById("score").style.fontSize = "44";
    }

};

var reset = function () {
    score = 0;
    document.getElementById("score").innerHTML = score;
};