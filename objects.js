var charizardArray = ["Blaze", 266, false, ["Fire", "Flying"]];
var charizardObject = {
    "attack": "Blaze",
    "HP": 266,
    "legendary": false,
    "types": ["Fire", "Flying"]
};

var yeezyObject = {
    brand: "Adidas",
    model: "Yeezy Boost 350",
    color: "Turtledove",
    size: 9,
    price: "$3200"
};

function Shoe(model){

    this.model = model;
}

var boosts = new Shoe("Yeezy Boost 350");

var stans = new Shoe("Stan Smiths");

function Superhero(heroName, realName, superpower){
    this.heroName = heroName;
    this.realName = realName;
    this.superpower = superpower;
}

var superman = new Superhero("Superman", "Clark Kent", ["Flying", "Super Strength"]);
var spiderman = new Superhero("Spiderman", "Peter Parker", ["Spidey Sense", "Web-Slinging", "Wall Climing", "Super Strength"]);