function setup() {
  createCanvas(400, 400);
  background (255);
}



var y1 = 0;
var y2 = 0;
var y3 = 0;
var y4 = 0;
var y5 = 0;
var y6 = 0;
var y7 = 0;
var y8 = 0;


function draw(){
    fill(200);
    for (var i = 0; i < 5; i++){
        rect(0, y1, 50, 50);
        y1 = y1 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(50, y2, 50, 50);
        y2 = y2 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(100, y3, 50, 50);
        y3 = y3 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(150, y4, 50, 50);
        y4 = y4 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(200, y5, 50, 50);
        y5 = y5 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(250, y6, 50, 50);
        y6 = y6 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(300, y7, 50, 50);
        y7 = y7 + 50
    }
    for (var i = 0; i < 5; i++){
        rect(350, y8, 50, 50);
        y8 = y8 + 50
    }

    function mouseClicked() {
        if () {
        value = 255;
        } else {
        value = 0;
  }
}
}


