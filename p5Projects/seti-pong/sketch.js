var ballx = 50;
var bally = 50;
var ballxspeed = 9;
var ballyspeed = 10;


function setup() {
  createCanvas(500, 600);
  background (0);

}

function draw() {
	background(0);

	//distance from center of the screen
	var d = dist(60, 30, 40 ,40);

  	fill ((200, 250), (200, 250), (200, 250));
  	ellipse (ballx, bally, d, d);
    rect( mouseX, 450, 80, 15);

  	//bouncing horizontally
 	 ballx = ballx + ballxspeed;
  	
  	 if (ballx > 500 || ballx < 0)  {
     	ballxspeed = -ballxspeed;
  	}

  	//bouncing veritcally
  	bally = bally + ballyspeed;

  	if (bally > 600 || bally < 0) {
	 	  ballyspeed = -ballyspeed;
  	}

    
}