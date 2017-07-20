var pokemonArray = [
    ["Fearow", "Flying", 65, 61, 61, false]
    ["Charizard", "Fire", 78, 109, 85, false]
    ["Golduck", "Water", 80, 95, 80, false]
    ["Gyrados", "Water", 95, 60, 100, false]
    ["Loudred", "Headass", 84, 71, 43, false]
    ["Krookodile", "Dark", 95, 65, 70, false]
]

function Pokemon(Name, Type, HP, Attack, Defense, Legendary) {
    this.Name = Name;
    this.Type = Type;
    this.HP = HP;
    this.Attack = Attack;
    this.Defense = Defense;
    this.Legendary = Legendary;
}

var Fearow = new Pokemon("Fearow", "Flying", 65, 61, 61, false);
var Charizard = new Pokemon("Charizard", "Fire", 78, 109, 85, false);
var Golduck = new Pokemon("Golduck", "Water", 80, 95, 80, false);
var Gyrados = new Pokemon("Gyrados", "Water", 95, 60, 100, false);
var Loudred = new Pokemon("Loudred", "Headass", 84, 71, 43, false);
var Krookodile = new Pokemon("Krookodile", "Dark", 95, 65, 70, false);

var myArray = [Fearow, Charizard, Golduck, Gyrados, Loudred, Krookodile]

function pokemonAttacked(HP) {
    for (var i = 0; i < myArray.length; i++) {
        myArray[i].HP = myArray[i].HP - 10;
        console.log(myArray[i]);
    }
}

pokemonAttacked();