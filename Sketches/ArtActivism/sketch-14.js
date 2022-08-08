function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("purple");
    
      //   stripes
    for (let lineX = 5; lineX < 600; lineX+=20) {
      stroke('#FFEB3B');
      strokeWeight(4);
      line(0,lineX,lineX,height);
    }
    
//   arcs     
    
//     fill("purple");
//     noStroke()
//     arc(0,0,600,600,0,HALF_PI)
    
//     fill("rgb(239,179,239)");
//     strokeWeight(8);
//     stroke("white")
//     arc(width,height,600,600, PI, HALF_PI)
    
     // Mic
    
    fill("black");
    noStroke()
    rect(10,120,190,40,6);
    
    fill("black");
    circle(200,140,65)
  
    fill("gray");
    rect(160,120,15,40)
    
 
    
//     left fist
      fill("brown");
      noStroke();
      quad(45,100,60,100,65,131,50,134)
    
      fill("brown");
      noStroke();
      quad(65,95,95,85,100,148,79,148)
    
      fill("brown");
      noStroke();
      quad(100,85,120,85,125,140,105,140)
    
      fill("brown");
      noStroke();
      quad(126,95,140,95,140,130,125,130)
    
      // thumb
      fill("brown");
      noStroke();
      rect(90,140,45,20,5)
      rect(118,140,25,35,3)
    
 //   palm
      fill("brown");
      noStroke();                                           quad(100,170,144,170,120,200,95,200);
    
      fill("brown");
      noStroke();
      quad(40,170,90,170,90,200,58,200);
    
//     left forearm
      fill("brown");
      noStroke();
      quad(60,205,120,205,120,270,44,290)
    
       //   phone
    fill('black');
    stroke('rgb(144,142,142)');
    strokeWeight(6)
    rect(150,290,260,120, 6)
    // quad(158,350,385,244,424,366,197,464)
    
    
//     middle fist
    
      // top fingers
      fill("#592f2a");
      noStroke()
      quad(195,288,232,265,243,345,232,350)   

      fill("#592f2a");
      noStroke()
      quad(233,258,275,250,285,348,255,350)
    
      fill("#592f2a");
     noStroke()
      quad(280,255,315,250,320,327,290,340)
    
      fill("#592f2a");
      noStroke()
      quad(320,260,350,260,340,315,325,320)

    //   thumb
      fill("#592f2a");
      noStroke();
      quad(300,347,360,330,370,370,305,375);

      fill("#592f2a");
      noStroke();
      quad(332,370,370,370,373,380,335,395);

    //   palm

      fill("#592f2a");
      noStroke();
      quad(300,400,373,380,335,460,240,455);
 
      
      fill("#592f2a");
      noStroke();
      quad(215,418,277,417,240,453,230,450);
    

      //    middle forearm
    fill("#592f2a");
    noStroke();
    quad(240,460,333,466,335,height,230,height);
    
    //   right fist with pencil and brush
     //   pencil
    
      fill('orange');
      noStroke();
      rect(400,115,190,15);

      fill("rgb(227,227,194)");
      noStroke();
      triangle(370,122,400,115,400,130)

   //     paint brush 

      fill("rgb(200,200,151)");
      noStroke()
      arc(340,147,60,30, PI, 0)

      fill("rgb(200,200,151)");
      noStroke()
      ellipse(345,143,60,20)
    
    //   handle
      fill("#1B601E")
      noStroke();
      rect(370,135,220,15,6);
    
    // clamp around brush 
      fill("black");
      noStroke();
      rect(370,135,15,15)
    
    
//     right#9E9E9E
      fill("#c58c85");
      noStroke();
      quad(445,101,460,100,465,131,450,134)
    
      fill("#c58c85 ");
      noStroke();
      quad(465,95,495,85,500,155,479,155)
    
      fill("#c58c85 ");
      noStroke();
      quad(500,85,520,85,525,140,505,140)
    
      fill("#c58c85 ");
      noStroke();
      quad(526,95,540,95,540,130,525,130)
    
    // thumb
      fill("#c58c85 ");
      noStroke();
      rect(440,135,45,20,5)
      rect(440,135,25,35,3)
  
    //   palm
      fill("#c58c85 ");
      noStroke();
      quad(500,160,544,160,530,200,500,200);
    
      fill("#c58c85 ");
      noStroke();
      quad(440,160,495,160,495,200,458,200);
    
//     right forearm
     fill("#c58c85");
      noStroke();
      quad(460,208,530,208,540,300,458,330)
    
    console.log("x", mouseX, "y", mouseY);
    
  }
  