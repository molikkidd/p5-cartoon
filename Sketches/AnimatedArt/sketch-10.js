var braidsW,curls,skintones;
let circleX;
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  braidsW = 40;
  i = 0;
  curls = 30;
  circleX = 0;
  skintones = [
    '#8d5524' ,	
	'#c68642 ',	
	'#e0ac69 ',	
	'#f1c27d ',	
	'#ffdbac', 
  ]
  colorMode(HSB);
}


function draw() {
  background("pink");
  
curls = curls + random(-.1,.2);
  
  if(curls > 100 ||  curls < 25) {
    curls = 30
  }

  
//   left braids
  fill("black")
  ellipse(110, 180, braidsW, 85, 25);
  ellipse(110, 250, braidsW, 85, 25);
  ellipse(110, 320, braidsW, 85, 25);
  ellipse(110, 390, braidsW, 85, 25);
//   back left
  ellipse(160, 180, braidsW, 85, 25);
  ellipse(160, 250, braidsW, 85, 25);
  ellipse(160, 320, braidsW, 85, 25);
  ellipse(160, 390, braidsW, 85, 25); 

//   back middle
  ellipse(200, 320, braidsW, 85, 25);
  ellipse(200, 390, braidsW, 85, 25); 

//   right
  ellipse(290, 180, braidsW, 85, 25);
  ellipse(290, 250, braidsW, 85, 25);
  ellipse(290, 320, braidsW, 85, 25);
  ellipse(290, 390, braidsW, 85, 25);
  //   back right
  ellipse(240, 180, braidsW, 85, 25);
  ellipse(240, 250, braidsW, 85, 25);
  ellipse(240, 320, braidsW, 85, 25);
  ellipse(240, 390, braidsW, 85, 25);
 //   face
  fill(skintones[i]);
  noStroke();
  ellipse(200,200,140,190);
  
  //   hairline
  fill("black");
  arc(200,170,150,130,180,0)

  
  braidsW+=.25
  
  if (braidsW > 75) {
    braidsW = 30
  }
  for (let lineX = 0; lineX < 145; lineX+=10) {
    stroke('#30A334');
    strokeWeight(10);
    line(lineX+130,100,lineX+130,140);
    
    fill("#CDDC39")
    noStroke()
    ellipse(lineX+130,85+ circleX,5,20)
    
    circleX = circleX + random(-.5,.5);
  }
  //   crown
  fill('#8BC34A')
  rect(120,120,160,50,5)
  
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
//   fill("white");
//   noStroke();
//   arc(170,220,30,20,180,0)
  
//   fill("white");
//   noStroke();
//   arc(235,220,30,20,180,0)
  
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
     
    i = i + 1
  //     reset
   if (i > skintones.length -1) {
    i = 0
  }
    fill(skintones[i]);
    noStroke();
    ellipse(200,200,140,190);
  
}

 function keyReleased() {
    //color hue values between 20 and 145
    //saturation 0 to 100
    //brightness 80 to 100
    stroke(random(20, 145), random(100), random(80, 100));
  }
  
