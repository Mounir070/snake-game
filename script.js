//Delcare Global Variables
var s; // the snake object
var scl = 20; // the size of the grid.
var food;
playfield = 600;

// p5js Setup function - required

function setup() {
  createCanvas(playfield,600, 600);
  background(50);
  s = new Snake();
  frameRate (10);
  pickLocation();
}



