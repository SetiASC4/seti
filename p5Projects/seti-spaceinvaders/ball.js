function Ball(x,y){
   this.x = x;
   this.y = y;

this.show = function(){
   fill(0, 200, 100, 50);
   ellipse(this.x, this.y,20,20);
}
this.move = function(dir){
   //this.y = this.y +dir;
   this.y +=dir;
}
}