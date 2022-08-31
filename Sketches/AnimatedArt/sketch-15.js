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

var curls = 30;

let circleX = 50;
let circleY = 350;
let ySpeed = 1;
let xSpeed = 2;
let message = "I love my Hair";

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES)
  afroStart = 135;
  afroEnd = 45;
   frameRate(60);


}

function draw() {
  background(bgColors[counter]);
   
  

  drawAfro()
  drawHearts()
  drawFace()
  drawCircles() 
}

function drawCircles() {
  
    // //   ball
//   fill("#2196F3")
//   circle(circleX,circleY,50);
  

  
//   circleY = circleY + ySpeed
//   // console.log('circleY',circleY,'ySpeed',ySpeed)

  
//   if (circleY < 0 || circleY > height) {
//     ySpeed = ySpeed * -1;
//   }

//   circleX += xSpeed;
//   if (circleX < 0 || circleX > width) {
//     xSpeed = xSpeed * -1;
//   }


  push();
  fill(230, 190, 230, 240);
  translate(400, 400);
  noStroke();
  //rotate(radians(frameCount / 2));
  for (var r1 = 0; r1 < 10; r1++) {
    
    if (frameCount <= 600) {
      ellipse(0, 10 + frameCount / 20, 10 + frameCount / 40, 20 + frameCount / 20);
    }
    if (frameCount > 600) {
      ellipse(0, 40, 25, 50);
    }
    rotate(180 / 5);
  }
  pop();

}

function drawFace() {
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

function drawAfro() {
   fill("black");
  //  noStroke()
//   left
  circle(263,65,curls);
  circle(244,70,curls);
  circle(225,65,curls);
  circle(203,74,curls);
  circle(177,77,curls);
  circle(148,91,curls);
  circle(130,107,curls);
  circle(111,123,curls);
  circle(71,198,curls);
  circle(95,142,curls);
  circle(77,175,curls); 
  circle(64,275,curls);
  circle(67,302,curls);
  circle(78,332,curls);
  circle(91,345,curls);
  circle(100,370,curls);
  circle(133,401,curls);
  circle(153,416,curls);
  circle(172,424,curls);
  circle(207,433,curls);
  circle(122,383,curls);
  circle(64,288,curls);
  circle(64,245,curls);
  circle(65,223,curls);
  circle(193,433,curls); 
  circle(254,438,curls);
  
// //   right
 
  circle(285,60,curls); 
  circle(309,74,curls);
  circle(332,81,curls);
  circle(353,99,curls);
  circle(378,113,curls);
  circle(398,134,curls);
  circle(415,167,curls);
  circle(429,193,curls);
  circle(426,212,curls);
  circle(435,242,curls);
  circle(438,271,curls);
  circle(429,298,curls);
  circle(418,325,curls);
  circle(406,341,curls);
  circle(398,365,curls);
  circle(378,382,curls);
  circle(365,397,curls);
  circle(343,413,curls);
  circle(319,420,curls); 
  
  // curls = curls + random(-.1,.2);

     //   straight hair
  // fill("black");
  // noStroke();
  // rect(140,250,220,hairHeight,5)

  // hairHeight  = hairHeight  + .5
  
  //   if (hairHeight > 300) {
  //   hairHeight  = 160;
  // }
//   afro
  fill("black");
  circle(250,250,afroSize)
  
  // afroSize = afroSize - 1;
  
// 380 = 380 - 1
// 379 = 379 - 1
// 378 = 378 - 1
// 377 = 377 - 1
  // etc..
  
   if (afroSize < 210) {
    afroSize = 400;
  }

 
    console.log(mouseX,mouseY)

}

function mousePressed() {
    
   counter = counter + 1
       //     reset
   if (counter >= skintones.length) {
    counter = 0
  }

    curls = curls + 1;
//   30 = 30 + 1
//   31 = 31 + 1
//   32 = 32 + 1
//   33 = 33 + 1
  
    if(curls > 100 ) {
    curls = 30
  }
}
 function drawHearts() {
   
  // for (var i=0; i<=200; i+=20){
    let xr=random(1,2);     
    let yr=random(1,1.5);
   for (var x=100; x<=450; x +=160 ){
    for(var y=120; y<=450; y +=130){
  fill('#9C27B0');
  ellipse(x+xr,y+yr,20,20)
  ellipse(x-15+xr,y+5,20,20)
  ellipse(x-25+xr,y-5,20,20)
  ellipse(x-17+xr,y-20,20,20)
  ellipse(x+xr,y-15,20,20)
  fill('yellow')
  ellipse(x-11,y-7,20,20)
  }
 }
  
 

  
   
 }
