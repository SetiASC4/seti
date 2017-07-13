function rand(num){
    var randomNum = num * Math.random();
    var result = Math.floor(randomNum);
    return result;
}

function randLetter(){
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var randomNum = rand(alphabet.length);
    var letter = alphabet[randomNum];
    return letter;
}

console.log(randLetter());

function randWord(){
    var word = "";
    // Use a loop to pick 5 random letters
    for (var i = 0; i < 5; i++){
        // Pick a letter
      word = word + (randLetter());
  }
return word;
}

console.log(randWord());

function randSentence(){
    var sentence = "";
    // Use a loop topick 5 random words
    for (var i = 0; i < 5; i++){
        // Pick a word
        sentence = sentence + randWord() + " ";
    }
    return sentence;
}

console.log(randSentence());