var afroSize, straightHair,curls;
var afroX,afroY;
var straightX, straightY,straightW, straightH;
var lineX, spearHandle, spearTip,skintones,i;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  i=0;
  afroX = 200;
  afroY = 120;
  afroSize = 370;
  straightHair = 0;
  straightX = 111;
  straightY = 150;
  straightW = 10;
  straightH = 150;
  afroStart = 135;
  afroEnd = 45;
  lineX = 0;
  spearHandle = 30;
  spearTip = 25;
   skintones = [
    '#8d5524' ,	
	'#c68642 ',	
	'#e0ac69 ',	
	'#f1c27d ',	
	'#ffdbac', 
  ]
 
curls = 30;
}


function draw() {
  background("#FFC107");
  
  
// nofro
    //afro
  fill("black");
  ellipse(200,140,232,222);
  ellipse(157, 241, curls, curls);
  ellipse(128,226, curls, curls);
  ellipse(108,207,curls, curls);
  ellipse(91,185,curls, curls);
  ellipse(87,165,curls, curls);
  ellipse(80,140,curls, curls);
  ellipse(82,111,curls, curls);
  ellipse(91,88,curls, curls);
  ellipse(101,65,curls,curls);
  ellipse(116,49,curls,curls);
  ellipse(132,37,curls,curls);
  ellipse(154,34,curls,curls);
  ellipse(175,25,curls,curls);
  ellipse(203,24,curls,curls);
  ellipse(225,25,curls,curls);
  ellipse(244,30,curls,curls);
  ellipse(263,51,curls,curls);
  ellipse(284,56,curls,curls);
  ellipse(299,79,curls,curls);
  ellipse(311,105,curls,curls);
  ellipse(315,126,curls,curls);
  ellipse(313,149,curls,curls);
  ellipse(312,164,curls,curls);
  ellipse(303,185,curls,curls);
  ellipse(290,203,curls,curls);
  ellipse(270,221,curls,curls);
  ellipse(249,235,curls,curls);  

curls = curls + random(-.1,.2);
  
  if(curls > 100 ||  curls < 25) {
    curls = 30
  }
 //   face
  fill(skintones[i]);
  noStroke();
  ellipse(200,200,140,190);
  
  //   hairline
  fill("black");
  arc(200,150,120,100,180,0)
  
  for (let lineX = 0; lineX < 145; lineX+=10) {
    stroke('#FFEB3B');
    strokeWeight(4);
    line(lineX+130,100,lineX+130,140);
      lineX = lineX + random(-.5,'.25');
  }
  //   crown
  fill('#FFEB3B')
  rect(120,140,160,30,5)
  
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