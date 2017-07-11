var myPokemonRoster = ["charizard", "Mewtwo", "Blastoise", "Mew", "Gengar"]

// var firstToFight = myPokemonRoster[0] 
// var secondToFight = myPokemonRoster[1] 

// console.log(firstToFight);
// console.log(secondToFight);

// myPokemonRoster.pop();
// myPokemonRoster.push("niggachu");
// myPokemonRoster.push("ABC Dragon Buster");

if(myPokemonRoster.length >= 5) {

for (var i = myPokemonRoster.length - 1; i >= 0; i--) {
    console.log(myPokemonRoster[i]);
}
}else {
    console.log("You can't play!!!!!!!!");
}