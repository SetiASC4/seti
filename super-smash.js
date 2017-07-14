var mashArray = ["Battlefield", "Final Denstination", "Delfino Plaza", "Mushroomy Kingdom"];
var firstQuestion = [220, 80];
var secondQuestion = ["Kirby", "Pichu"];

var prompt = require('prompt-sync')();

// function Questions(){
//     var place = prompt("Where will you fight?");
//     mashArray.push(place);

//     var answer1 = prompt("How many times will you strike?");
//     firstQuestion.push(answer1);

//     var answer2 = prompt("Who will you fight?");
//     secondQuestion.push(answer2);
// }

// Questions();

for (var i = 0; i < 2; i++){
    firstQuestion.push(promptSync("How many times will you strike?"))
    secondQuestion.push(promptSync("Who will you choose to fight?"))
}

var randArray = function(array){
    return array[Math.floor(Math.array()*array.length)];
}

console.log("You fought " + randArray(secondQuestion) + " in the" + randArray(mashArray) + " and hit them " + randArray(firstQuestion) + "times.Too Bad. Metwo wins!" )