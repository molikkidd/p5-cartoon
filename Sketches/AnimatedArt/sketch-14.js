var afroSize = 380;
var hairHeight = 160;
var skintones = [
    "#8d5524 ",
	"#c68642", 	
	"#e0ac69 ",	
	"#f1c27d ",
	"#ffdbac",
];

var bgColors = [
  "#03A9F4",
  "#FFC107",
  "#673AB7",
  "#088F8F",
  "#50C878",
]
var counter = 0;
var curls;
let circleX = 50;
let circleY = 350;
let ySpeed = 1;
let xSpeed = 2;
let message = "Black Girls Rock";

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
  afroStart = 135;
  afroEnd = 45;
  curls = 30; 

}

function draw() {
  
  background(bgColors[counter]);
  drawCircles()
  drawAfro()

}

function drawCircles() {
  
  
// //   ball
//   fill("#2196F3")
//   circle(circleX,circleY,50);
  
    
  fill("white");
  textSize(32);
  text(message, circleX, circleY);
  
  circleY = circleY + ySpeed
  // console.log('circleY',circleY,'ySpeed',ySpeed)

  
  if (circleY < 0 || circleY > height) {
    ySpeed = ySpeed * -1;
  }

  circleX += xSpeed;
  if (circleX < 0 || circleX > width) {
    xSpeed = xSpeed * -1;
  }


}

function drawAfro() {
  // scale(0.5)
   fill("black");
  // // noStroke()
  ellipse(90,308,curls, curls); 
  ellipse(83,288,curls, curls);
  ellipse(77,263,curls, curls);
  ellipse(72,236,curls, curls);
  ellipse(72,222,curls, curls);
  ellipse(62,194,curls, curls);
  ellipse(82,111,curls, curls);
  ellipse(91,88,curls, curls);
  ellipse(101,65,curls,curls);
  ellipse(116,49,curls,curls);
  ellipse(132,37,curls,curls);
  ellipse(154,34,curls,curls);
  ellipse(175,25,curls,curls);
  ellipse(72,135,curls,curls);
  ellipse(63,166,curls,curls);
  ellipse(203,24,curls,curls);
  ellipse(225,25,curls,curls);
  ellipse(244,20,curls,curls);
  ellipse(263,15,curls,curls);
  ellipse(234,392,curls,curls);
  ellipse(207,382,curls,curls);
  ellipse(112,333,curls,curls);
  ellipse(119,342,curls,curls);
  ellipse(137,354,curls,curls);
  ellipse(153,367,curls,curls);
  ellipse(178,376,curls,curls); 
  ellipse(254,388,curls,curls);

     //   straight hair
  fill("black");
  noStroke();
  rect(172,195,155,hairHeight,5)

  // hairHeight  = hairHeight  + .5
  
    if (hairHeight > 300) {
    hairHeight  = 160;
  }
//   afro
  fill("black");
  circle(250,200,afroSize)
  
  // afroSize = afroSize - 1;
  
// 380 = 380 - 1
// 379 = 379 - 1
// 378 = 378 - 1
// 377 = 377 - 1
  // etc..
  
   if (afroSize < 100) {
    afroSize = 400;
  }
  
 //   face
  fill(skintones[counter])
  noStroke();
  ellipse(250,250,140,190);
  
  //   hairline
 fill("black");
  arc(250,200,155,100,180,0)
  
//   eyebrows
  noFill()
  stroke("#7A491F")
  strokeWeight(3)
  arc(220,250,30,20,190,345)
  
    noFill()
  stroke("#7A491F")
  strokeWeight(3)
  arc(280,250,30,20,190,345)
  
//   eyes
//   fill("#DBE9EF");
//   noStroke();
//   // arc(220,260,30,20,180,0)
//   ellipse(220,260,30,10)
  
//   fill("#DBE9EF");
//   noStroke();
//   // arc(280,260,30,20,180,0)
//     ellipse(280,260,30,10)

//   nose
  fill("#7A491F");
  noStroke();
  arc(250,288,20,10,0,180)
  
  fill("#7A491F");
  noStroke();
  arc(260,285,10,10,315,135)
  
  fill("#7A491F");
  noStroke();
  arc(240,285,10,10,45,215)
  
//   mouth
  fill("rgb(132,34,34)");
  noStroke();
  arc(242,310,20,10,180,0)
  
  fill("rgb(132,34,34)");
  noStroke();
  arc(258,310,20,10,180,0)
  
  fill("rgb(164,58,58)");
  noStroke();
  arc(250,310,35,10,0,180)
  
}

function mousePressed() {
    
   counter = counter + 1
       //     reset
   if (counter >= skintones.length) {
    counter = 0
  }
  
}

