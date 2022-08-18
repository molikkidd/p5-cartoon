var afroSize, straightHair;
var afroX,afroY;
var straightX, straightY,straightW, straightH;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  
  afroX = 200;
  afroY = 120;
  afroSize = 400;
  straightHair = 0;
  straightX = 165;
  straightY = 150;
  straightW = 70;
  straightH = 150;
  afroStart = 135;
  afroEnd = 45;
}


function draw() {
  background("#FFC107");
  

     //   straight hair
  fill("black");
  noStroke();
  rect(straightX,straightY,straightW, straightH,5)

  
 if (afroSize) {
    //   afro
  fill(0);
  circle(afroX,afroY,afroSize)
  // arc(afroX,afroY,200,225,afroStart,afroEnd,CHORD)
  } 
  
 //   face
  fill( "#8d5524")
  noStroke();
  ellipse(200,200,140,190);
  
  //   hairline
  fill("black");
  arc(200,170,180,180,180,0)
//   eyebrows
  noFill()
  stroke("#7A491F")
  strokeWeight(3)
  arc(165,200,30,20,190,345,OPEN)
  
    noFill()
  stroke("#7A491F")
  strokeWeight(3)
  arc(235,200,30,20,190,345,OPEN)
  
//   eyes
  fill("white");
  noStroke();
  arc(170,220,30,20,180,0)
  
  fill("white");
  noStroke();
  arc(235,220,30,20,180,0)
  
//   nose
    fill("#7A491F");
  noStroke();
  arc(200,248,20,10,0,180)
  
      fill("#7A491F");
  noStroke();
  arc(210,245,10,10,315,135)
  
        fill("#7A491F");
  noStroke();
  arc(190,245,10,10,45,215)
  
//   mouth
  
  fill("rgb(132,34,34)");
  noStroke();
  arc(192,270,20,10,180,0)
  
    fill("rgb(132,34,34)");
  noStroke();
  arc(208,270,20,10,180,0)
  
     fill("rgb(164,58,58)");
  noStroke();
  arc(200,270,35,10,0,180)
  
 
}

function mousePressed() {
     
    if (afroSize >= 0 ) {
//       change afro size
      afroSize-=20
      afroY+=3
      afroStart+=2
      afroEnd-=2
      fill("green");
      noStroke()
      // circle(afroX,afroY,afroSize) 
        arc(afroX,afroY,200,200,afroStart,afroEnd,CHORD)
      }
//  change straight hair size  
      if (straightW <= 170) {
      straightX-=5
      straightY+=1
      straightW+=10
      fill("black");
      noStroke();
      rect(straightX,straightY,straightW, straightH)
    }      
  
  console.log(afroSize)
}