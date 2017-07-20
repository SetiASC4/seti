var x = 50;
var y = 50;
var xspeed = 9;
var yspeed = 10;


function setup() {
  createCanvas(1000, 1000);
  background (100);

}

function draw() {
	background(0);

	//distance from center of the screen
	var d = dist(500/2, 500/2, mouseX, mouseY);

  	fill ((200, 250), (200, 250), (200, 250));
  	rect (x, y, d, d);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > 500 || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > 500 || y < 0) {
	 	  yspeed = -yspeed;
  	}
}