function setup(){
    createCanvas(500, 500);
    background(100);

    fill("white");
    textSize(16);
    text("Please type in the sentence below.", 50, 50);
    text(sentence, 50, 100);
}


function keyTyped(){
    console.log(typed);
    typed = typed + key;
    if (typed == sentence);
    alert("You Win!");
}

// var emptyString = "";
// var alphabet = "abcdefghijklmnopqrstuvwxyz";
// var getRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
// var randomLetter = getRandomLetter;

// var x = 10
// var y = random(300);

// var typed = "";



// function draw(){
//     background(100);
//     text((randomLetter, x, y));
//     x++
// }



