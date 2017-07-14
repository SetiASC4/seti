var prompt = require('prompt-sync')();

// Player starts wirh $1000
//Shopping for and adventure
//tryna blow all their cash 

// PSEUDOBODE
// assign the player's money to 1000
// create an array to store the items that the player bought
// Until El player runs out of money: do the dew
// ask them what they want - russ
//substract that price from the money they have
//put item they bought in array

var money = 1000;

var items = [];

while(money > 99){
    console.log("You have $" + money + " left. A tent is $100. Useezys are $500. ")
    var answer = prompt('Which item do you want to buy?');
    if(answer == "tent"){
        money = money - 100;
        items.push("tent");
        console.log("You bought a tent")
    }else if(answer == "Useezys"){
        money = money - 500;
        items.push("Useezys")
        console.log("You bought Useezys")
    }else{
        console.log("Issa dub, get out the store!")
    }

    }