var afroSize, straightHair;
var afroX,afroY;
var straightX, straightY,straightW, straightH;
var incr;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  
  afroX = 200;
  afroY = 120;
  afroSize = 300;
  straightHair = 0;
  straightX = 165;
  straightY = 150;
  straightW = 70;
  straightH = 170;
}


function draw() {
  background("#03A9F4");
  

     //   straight hair
  fill("black");
  noStroke();
  rect(straightX,straightY,straightW, straightH,5)
   //   neck
  fill("#c68642")
  noStroke();
  rect(165,270,70,140,15)
  
 //   face
  fill( "#8d5524")
  noStroke();
  ellipse(200,200,140,190);
  
  if (afroSize) {
    //   afro
  fill(0);
  // circle(afroX,afroY,afroSize)
  arc(afroX,afroY,200,200,135,45,CHORD)
    
  }
  
 //   shoulders
  fill("purple");
  noStroke();
  rect(70,360,260,40)
  arc(200,360,250,80,180,0)

}

function mousePressed() {
     
    if (afroSize <= 300 && afroSize >=0 ) {
//       change afro size
      afroSize-=20
      afroY+=3
      
      fill("green");
      noStroke()
      // circle(afroX,afroY,afroSize) 
        arc(afroX,afroY,200,200,135,45,CHORD)

//  change straight hair size  
      if (straightW <= 190) {
                straightX-=5
      straightY+=1
      straightW+=10
      fill("black");
      noStroke();
      rect(straightX,straightY,straightW, straightH)
          }

      
      
    }
  
  console.log(straightW)
  
    
  
}