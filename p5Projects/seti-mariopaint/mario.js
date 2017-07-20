function setup(){
    createCanvas(3000, 3000);
    background(255)
}


function mouseDragged() {
    noStroke();
    fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, mouseY, random(5000), random(5000));
    rect(mouseX, mouseY, random(5000), random(5000));
    
}


