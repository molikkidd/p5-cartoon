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
//   // // noStroke()
// //   left
    ellipse(263,65,curls,curls);
    ellipse(244,70,curls,curls);
    ellipse(225,65,curls,curls);
    ellipse(203,74,curls,curls);
    ellipse(177,77,curls,curls);
    ellipse(148,91,curls,curls);
    ellipse(130,107,curls,curls);
    ellipse(111,123,curls, curls);
    ellipse(71,198,curls,curls);
  ellipse(95,142,curls,curls);
  ellipse(77,175,curls, curls); 
  ellipse(64,275,curls, curls);
  ellipse(67,302,curls, curls);
  ellipse(78,332,curls, curls);
  ellipse(91,345,curls, curls);
  ellipse(100,370,curls, curls);
  ellipse(133,401,curls,curls);
  ellipse(153,416,curls,curls);
  ellipse(172,424,curls, curls);
   ellipse(207,433,curls,curls);
  ellipse(122,383,curls,curls);
  ellipse(149,392,curls,curls);


  ellipse(64,288,curls,curls);
  ellipse(64,245,curls,curls);
  ellipse(65,223,curls,curls);
  ellipse(193,433,curls,curls); 
  ellipse(254,438,curls,curls);
  
// //   right
 
 
  ellipse(285,60,curls, curls); 
  ellipse(309,74,curls, curls);
  ellipse(332,81,curls, curls);
  ellipse(353,99,curls, curls);
  ellipse(378,113,curls, curls);
  ellipse(398,134,curls, curls);
  ellipse(415,167,curls, curls);
  ellipse(429,193,curls, curls);
  ellipse(426,212,curls,curls);
  ellipse(435,242,curls,curls);
  ellipse(438,271,curls,curls);
  
  ellipse(429,298,curls,curls);
  ellipse(418,325,curls,curls);
  ellipse(406,341,curls,curls);
  ellipse(398,365,curls,curls);
  ellipse(378,382,curls,curls);
  ellipse(365,397,curls,curls);
  ellipse(343,413,curls,curls);
  ellipse(319,420,curls,curls);
  
  ellipse(297,438,curls,curls);
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
  rect(140,250,220,hairHeight,5)

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
  arc(250,280,200,340,345,195,OPEN )
  
  //   hairline
 fill("black");
  arc(250,255,220,150,180,0)
  
  // eyebrow
  noFill()
  stroke("#4F2A0A")
  strokeWeight(3)
  arc(205,320,50,40,190,345)
  
  noFill()
  stroke("#4F2A0A")
  strokeWeight(3)
  arc(300,320,50,40,190,345)
  
  // eyes
  fill(skintones[counter]);
  noStroke();
  arc(350,320,30,40,260,110,OPEN)
  // ellipse(220,260,30,10)
  
  // fill("#DBE9EF");
  // noStroke();
  arc(150,315,30,40,70,270,OPEN)
    // ellipse(280,260,30,10)

  
//   EARRINGS
  fill(bgColors[counter]);
  circle(155,337,20)
  circle(347,337,20)
//   nose
  fill("#4F2A0A");
  noStroke();
  arc(250,380,25,10,0,180)
  
  fill("#4F2A0A");
  noStroke();
  arc(260,377,15,10,315,135)
  
  fill("#4F2A0A");
  noStroke();
  arc(240,377,15,10,45,215)
  
// //   mouth
  fill("rgb(132,34,34)");
  noStroke();
  arc(242,410,40,20,180,0)
  
  fill("rgb(132,34,34)");
  noStroke();
  arc(258,410,40,20,180,0)
  
  fill("rgb(164,58,58)");
  noStroke();
  arc(250,410,55,20,0,180)
  
}

function mousePressed() {
    
   counter = counter + 1
       //     reset
   if (counter >= skintones.length) {
    counter = 0
  }
  
}

