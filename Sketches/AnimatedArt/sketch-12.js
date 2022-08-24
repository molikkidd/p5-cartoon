var afroSize, straightHair;

let x = 0;
let y = 0;
let dim = 40.0;
let img,newImg;

// wave 
let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 30.0; // Height of wave
let period = 600.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues;

function setup() {
  createCanvas(700, 400);
  // angleMode(DEGREES)
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  img = loadImage('assests/dolphinOne.jpg');
  
}

// function preload() {
//   newImg = loadImage('assests/dolphinOne.jpg');
// }

function draw() {
  background("#03A9F4");
  
  

  calcWave();
  renderWave();
  
  // Animate by increasing our x value
  x = x + 0.8;
  // If the shape goes off the canvas, reset the position
  if (x > width + dim) {
    x = -dim;
  }

  // Even though our rect command draws the shape with its
  // center at the origin, translate moves it to the new
  // x and y position
  translate(x, height / 2 - dim / 2);
  fill("green");
  rect(-dim / 2, -dim / 2, dim, dim);

  // Transforms accumulate. Notice how this rect moves
  // twice as fast as the other, but it has the same
  // parameter for the x-axis value
  translate(x, dim+60);
  fill("gray");
  arc(-dim / 2, -dim / 2,20,20,PI+HALF_PI,HALF_PI)
  
  arc(20,20,20,40,0,HALF_PI+QUARTER_PI)
  rect(-dim / 2, -dim / 2, 80, 30);

  image(img, -dim / 2, -dim / 2, 50,50);
 
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(255);
   fill("blue");
  // A simple way to draw the wave with an ellipse at each location
  for (let x = 0; x < yvalues.length; x++) {
    
    rect(x * xspacing, height / 2 + yvalues[x], 16,height)

  }
}