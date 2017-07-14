var pokemonArray = [
    ["Fearow", "Flying", 65, 61, 61, false]
    ["Charizard", "Fire", 78, 109, 85, false]
    ["Golduck", "Water", 80, 95, 80, false]
    ["Gyrados", "Water", 95, 60, 100, false]
    ["Loudred", "Headass", 84, 71, 43, false]
    ["Krookodile", "Dark", 95, 65, 70, false]
]

for (var i = 0; i < pokemonArray.length; i++){
    for (var j = 0; j < pokemonArray[i].length; j++){
    console.log(pokemonArray[i][j]);
}
}