function setup() {
  createCanvas(500, 500);
  background ("green");

  fill("yellow");
  //Pokemon
  rect(400, 160, 80, 80);
  fill("blue")
  //Oppponent Pokemon
  rect(20, 160, 80, 80);

  fill("white");
  //Name Boxes
  rect(20, 105, 150, 25);  
  rect(330, 105, 150, 25);
  
  fill("black")
  //Names
  text("Pikachu", 335, 115, 40, 40);
  text("Blastoise", 25, 115, 40, 40);

  //Attack Names
  text("Thundershock", 335, 115, 40, 40);
  text("Leer", 25, 115, 40, 40);
  text ("Thunder", 25, 115, 40, 40);
  text ("Quick Attack", 25, 115, 40, 40);

  //Attack Boxes
  fill("")
  rect(400, 375, 80, 80);
  fill("yellow")
  rect(150, 375, 80, 80);
  rect(275, 375, 80, 80);
  rect(20, 375, 80, 80);
  
  noStroke();
  fill("lime");
  //HP Bars
  rect(20, 60, 25, 25);
  rect(45, 60, 25, 25);
  rect(70, 60, 25, 25);
  rect(95, 60, 25, 25);
  rect(120, 60, 25, 25);
  rect(145, 60, 25, 25);

  rect(330, 60, 25, 25);
  rect(355, 60, 25, 25);
  rect(380, 60, 25, 25);
  rect(405, 60, 25, 25);
  rect(430, 60, 25, 25);
  rect(455, 60, 25, 25);


}
//COM HP
var x1 = 145
var x2 = 120
var x3 = 95
var x4 = 70
function mouseClicked() {
    if (mouseX >= 400 && mouseX <= 480 && mouseY >= 375 && mouseY <= 455){
        console.log(mouseX, mouseY);
        fill("red");
        rect(x1, 60, 25, 25);
        x1 = x1 - 25
    }
    if (mouseX >= 275 && mouseX <= 355 && mouseY >= 375 && mouseY <= 455){
        console.log(mouseX, mouseY);
        fill("red");
        rect(x1, 60, 25, 25);
        rect(x2, 60, 25, 25);
        x1 = x1 - 25
        x2 = x2 - 25
    }
    if (mouseX >= 20 && mouseX <= 100 && mouseY >= 375 && mouseY <= 455){
        console.log(mouseX, mouseY);
        fill("red");
        rect(x1, 60, 25, 25);
        rect(x2, 60, 25, 25);
        rect(x3, 60, 25, 25);
        x1 = x1 - 25
        x2 = x2 - 25
        x3 = x3 - 25
    }
    if (mouseX >= 150 && mouseX <= 230 && mouseY >= 375 && mouseY <= 455){
        console.log(mouseX, mouseY);
        fill("red");
        rect(x1, 60, 25, 25);
        rect(x2, 60, 25, 25);
        rect(x3, 60, 25, 25);
        rect(x4, 60, 25, 25);
        x1 = x1 - 25
        x2 = x2 - 25
        x3 = x3 - 25
        x4 = x4 - 25
    }
}
