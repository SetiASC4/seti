// TASK
// create a rand() function
// takes a number
// returns a number between 0 and that number

// PSEUDOCODE
// multiply Math.random() by the given number
// remove the decimal part
// return the remaning integer

function rand(num){
    // returns random integer between 0 and number
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;

}
