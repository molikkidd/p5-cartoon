var sideLength;
var increment;
var incr;
var x,y;
var skintone = [
  "#8d5524",
	"#c68642" ,	
	"#e0ac69", 	
	"#f1c27d", 	
	"#ffdbac",
];
var next;
function setup() {
  createCanvas(400, 400);
  fill("brown");
  
  sideLength = 100;
  increment = 0;
  incr = 50;
  x = 20;
  y = 20;
  next = 0;
  
}

function draw() {
  
//   square to circle
  if(increment <= sideLength/2) {
    clear();
    increment++;
  } 
rect(10, 10, sideLength, sideLength, increment);  

}

function mousePressed() {
      
    if(increment <= 51) {
      clear()
      x+=10
      // y+=10
      incr-=3;
      fill(skintone[next++])
  }
  console.log(x,y,increment)
  rect(x, y, sideLength, sideLength, incr);  
}