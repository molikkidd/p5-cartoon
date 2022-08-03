function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("#F0C9F6");
    // background("white");
    
  //   stripes
    for (let i = 5; i < 600; i+=20) {
      stroke('#E493F2');
      strokeWeight(10);
      line(i-300,0,i-300,height);
    }
     
  // arc
    
    fill("#FDF6B6");
    strokeWeight(8);
    stroke("#E493F2")
    arc(width,height,600,600, PI,HALF_PI)
    
    fill("#FDF6B6");
    strokeWeight(8);
    stroke("#E493F2")
    arc(0,0,600,600,0,HALF_PI)
    
  // Mic
    
    fill("black");
    stroke("gray");
    strokeWeight(1);
    rect(10,120,190,40,6);
    
    fill("black");
    circle(200,140,65)
  
    fill("gray");
    rect(160,120,15,40)
    
  // left fist for mic
      fill("pink");
      noStroke();
      // rect(35,90,20,40,5)
      quad(45,101,60,100,65,131,50,134)

      fill("pink");
      noStroke();
      // rect(65,85,20,55,5)
      quad(65,95,95,85,100,155,79,155)

      fill("pink");
      noStroke();
      // rect(95,85,20,60,5)
      quad(100,85,120,85,125,140,105,140)

      fill("pink");
      noStroke();
      // rect(120,95,15,25,5)
      quad(126,95,140,95,140,130,125,130)

    // thumb
      fill("pink");
      noStroke();
      rect(90,140,45,20,5)
      rect(118,140,25,35,3)
  
    //   palm
      fill("pink");
      noStroke();
      quad(100,170,144,170,120,200,95,200);
    
      fill("pink");
      noStroke();
      quad(40,170,90,170,90,200,58,200);
      
    
//     forearm
    
     fill("pink");
      noStroke();
      // rect(495,95,20,55,5)
      quad(60,205,120,205,120,270,44,290)
    
    
      //   phone
    fill('black');
    stroke('#9E9E9E');
    strokeWeight(6)
    quad(158,350,385,244,424,366,197,464)
    
    
    
    // middle fist with phone
    // top fingers
  fill("brown");
  noStroke();
  quad(195,285,222,265,233,345,200,350)
  
  fill("brown");
  noStroke();
  quad(233,258,275,250,285,348,245,350)
  
  fill("brown");
  noStroke();
  quad(280,255,315,250,320,317,290,325)
  
  fill("brown");
  noStroke();
  quad(320,260,350,260,350,305,325,310)
  
//   thumb
  fill("brown");
  noStroke();
  quad(300,347,360,330,370,370,305,375);
  
  fill("brown");
  noStroke();
  quad(332,370,370,370,373,380,335,395);
  
//   palm
  
  fill("brown");
  noStroke();
  quad(300,400,373,380,335,460,240,455);
  
  // fill("brown");
  // noStroke();
  // quad(203,378,294,361,300,390,232,452);
  
//    fill("brown");
//   noStroke();
//   quad(197,361,233,355,243,375,203,379);    
    
//     forearm
  fill("brown");
  noStroke();
  quad(240,460,333,466,335,height,230,height);
    
    //   pencil
    
    fill('orange');
    noStroke();
    rect(400,115,190,15);
    
    fill("rgb(227,227,194)");
    noStroke();
    triangle(370,122,400,115,400,130)
    
      //     paint brush 
    
    fill("#795548");
    noStroke()
    arc(340,147,60,30, PI, 0)
    
    fill("#795548");
    noStroke()
    ellipse(345,143,60,20)
  //   stick
    fill("brown")
    noStroke();
    rect(370,135,220,15,6);
  // clamp around brush 
    fill("black");
    noStroke();
    rect(370,135,15,15)
          
  //   right fist with pencil and brush
    
     //   495
      fill("#00BCD4");
      noStroke();
      // rect(445,105,15,25,5)
      quad(445,101,460,100,465,131,450,134)
    
      //   465
      fill("#00BCD4");
      noStroke();
      // rect(465,95,20,60,5)
      quad(465,95,495,85,500,155,479,155)
    
      fill("#00BCD4");
      noStroke();
      // rect(520,100,20,40,5)
      quad(500,85,520,85,525,140,505,140)
    
      //   435
      fill("#00BCD4");
      noStroke();
      // rect(495,95,20,55,5)
      quad(526,95,540,95,540,130,525,130)
    
    // thumb
      fill("#00BCD4");
      noStroke();
      rect(440,135,45,20,5)
      rect(440,135,25,35,3)
  
    //   palm
      fill("#00BCD4");
      noStroke();
      quad(500,160,544,160,530,200,500,200);
    
      fill("#00BCD4");
      noStroke();
      quad(440,160,495,160,495,200,458,200);
    
//     forearm
     fill("#00BCD4");
      noStroke();
      // rect(495,95,20,55,5)
      quad(460,208,530,208,540,300,458,330)
    
  
    console.log("x", mouseX, "y", mouseY);
    
  }
  