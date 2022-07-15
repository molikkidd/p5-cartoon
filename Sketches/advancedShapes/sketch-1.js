function setup() {
  createCanvas(500, 500);
}

function draw() {
  background('blue');
//   wall
  fill("navy");
  noStroke()
  rect(100,0,400,400);
  //   poster around eyes
  fill("lightblue");
  noStroke()
  rect(125,100,350,150,5)

//   eyebrows
  stroke("orange")
  strokeWeight(2)
  arc(440,145,40,20,PI,0)
  
  // fill("orange");
    stroke("orange")
  strokeWeight(2)
  arc(370,135,60,40,PI,0)
  
//   eyes
  fill("white");
  stroke("black");
  strokeWeight(1)
  arc(380, 180, 50,60, PI - QUARTER_PI, QUARTER_PI, OPEN);
//   eyes
  fill("white")
  arc(440, 180, 50,60, PI - QUARTER_PI, QUARTER_PI, OPEN);
//   pupils
  fill("black")
  ellipse(365, 185,15,20)
  fill("black")
  ellipse(425, 185,15,20)
//   nose
 
  fill("sandybrown");
  noStroke()
  ellipse(385,220,10,10);
  
  stroke('orange');
  noFill();
  arc(385,210, 20, 10, 0, HALF_PI) 

  console.log("X", mouseX, "Y", mouseY);

//   floor
  fill("orange");
  noStroke()
  quad(100,400,500,400,500,500,0,500);
  
//     candles
   for (let i = 0; i < 100; i+=10) {
     stroke("orange");
     strokeWeight(5)
     line(i+155,200,i+155,160)
     
     fill("lightyellow")
     noStroke()
     ellipse(i+155,145,5,10)
  }
 
//   cake
  fill("white");
  noStroke()
  rect(140,200,120,40,10,10,0,0)

  
 
  
}