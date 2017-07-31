var hp = 100;
var gold = 0;
var numberDefeated = 0;

function setup() {
    $("body").append("<h1>Welcome to Ogre Fighter v.1.0</h1>");

    $("body").append("<p>Ogres are attacing your village! When you slay one, they drop 10 gold. The more gold you carry, though, the harder it is to defeat an orge.</p>");

    // Add Stats
    // TODO: Add stat values
    $("body").append("<h3>STATS</h3><p id='stats' ></p>");

    //Add attack button
    $("body").append("<button onclick='attack()'>Attack the Ogre!</button>");

    // Add container for ogre images
    $("body").append("<div id='ogres'></div>");

    updateStats();


}

function updateStats() {
    $("#stats").text("HP: " + hp + " | Gold: " + gold + " | Ogres Slain: " + numberDefeated);
}

function attack() {
    if (hp > 0) { // Player is still alive
        if (Math.random() * 100 > gold) {
            gold += 10; // gold = gold + 10
            numberDefeated++;
            $("#ogres").prepend("<p> You won! + 10 gold.</p>");
        } else {
            gold--; // gold = gold - 1
            hp--;
            $("#ogres").prepend("<p> You lost! - 1 gold.</p>");
        }
        updateStats();
        spawnOgre();
    }
}

function spawnOgre() {
    $("#ogres").prepend("<img src='https://i.ytimg.com/vi/ZpHeJHqiYoM/maxresdefault.jpg'>");
}
$(document).ready(setup);

// Add the game title 
// Add game info
// Add the stats
// Add an ogre image
// When the player clicks the button
//      if the player has HP
//          if the player defeats ogre
//              Add paragraph saying "you win"
//              + Gold to player
//              + Num of ogres defeated
//            else
//              Add paragrph saying "you lost"
//              - Gold from Player
//              - HP
//            update status
//           add another ogre image
//          else
//               Add paragraph saying "Game Over"
//