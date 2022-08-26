var afroSize = 350;
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
  fill("#2196F3")
  circle(circleX,circleY,50);
  
  
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
  console.log(mouseX,mouseY)
   fill("black");
  // // noStroke()
//   left
  ellipse(110,358,curls, curls); 
  ellipse(103,338,curls, curls);
  ellipse(87,313,curls, curls);
  ellipse(82,286,curls, curls);
  ellipse(82,272,curls, curls);
  ellipse(72,244,curls, curls);
  ellipse(92,161,curls, curls);
  ellipse(101,138,curls, curls);
  ellipse(146,115,curls,curls);
  ellipse(124,132,curls,curls);
  ellipse(164,103,curls,curls);
  ellipse(184,94,curls,curls);
  // ellipse(175,75,curls,curls);
  ellipse(82,185,curls,curls);
  ellipse(73,216,curls,curls);
  ellipse(203,74,curls,curls);
  ellipse(225,75,curls,curls);
  ellipse(244,70,curls,curls);
  ellipse(263,65,curls,curls);
  // ellipse(194,442,curls,curls);
  ellipse(207,382,curls,curls);
  ellipse(122,383,curls,curls);
  ellipse(149,392,curls,curls);
  // ellipse(137,404,curls,curls);
  // ellipse(153,407,curls,curls);
  ellipse(178,406,curls,curls); 
  // ellipse(254,438,curls,curls);
  
//   right
  ellipse(419,219,curls, curls); 
  ellipse(422,242,curls, curls);
  ellipse(422,265,curls, curls);
  ellipse(420,289,curls, curls);
  ellipse(412,320,curls, curls);
  ellipse(390,340,curls, curls);
  ellipse(383,361,curls, curls);
  ellipse(371,372,curls, curls);
  ellipse(356,390,curls,curls);
  ellipse(338,400,curls,curls);
  ellipse(312,415,curls,curls);
  
  ellipse(389,155,curls,curls);
  ellipse(408,169,curls,curls);
  ellipse(382,141,curls,curls);
  ellipse(411,190,curls,curls);
  ellipse(363,120,curls,curls);
  ellipse(335,105,curls,curls);
  ellipse(314,85,curls,curls);
  ellipse(283,75,curls,curls);
  
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
  circle(250,250,afroSize)
  
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
  // ellipse(250,340,170,250);
  arc(250,340,170,250,345,195,OPEN )
  
  
  
  // eyebrow
//   noFill()
//   stroke("#65350C")
//   strokeWeight(3)
//   arc(220,375,30,20,190,345)
  
//   noFill()
//   stroke("#65350C")
//   strokeWeight(3)
//   arc(280,375,30,20,190,345)
  
  // eyes
//   fill("#DBE9EF");
//   noStroke();
//   // arc(220,260,30,20,180,0)
//   ellipse(220,260,30,10)
  
//   fill("#DBE9EF");
//   noStroke();
//   // arc(280,260,30,20,180,0)
//     ellipse(280,260,30,10)

//   nose
//   fill("#65350C");
//   noStroke();
//   arc(250,410,20,10,0,180)
  
//   fill("#65350C");
//   noStroke();
//   arc(260,407,10,10,315,135)
  
//   fill("#65350C");
//   noStroke();
//   arc(240,407,10,10,45,215)
  
// //   mouth
//   fill("rgb(132,34,34)");
//   noStroke();
//   arc(242,440,20,10,180,0)
  
//   fill("rgb(132,34,34)");
//   noStroke();
//   arc(258,440,20,10,180,0)
  
//   fill("rgb(164,58,58)");
//   noStroke();
//   arc(250,440,35,10,0,180)
  
}

function mousePressed() {
    
   counter = counter + 1
       //     reset
   if (counter >= skintones.length) {
    counter = 0
  }
  
}

