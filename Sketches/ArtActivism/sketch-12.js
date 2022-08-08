function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("#F0C9F6");
    
      //   stripes
//     for (let lineX = 5; lineX < 310; lineX+=20) {
//       stroke('#E493F2');
//       strokeWeight(10);
//       line(lineX,0,lineX,height);
//     }
    
//   arcs     
    
    fill("#FDF6B6");
    strokeWeight(8);
    stroke("#E493F2")
    arc(0,0,600,600,0,HALF_PI)
    
    fill("#FDF6B6");
    strokeWeight(8);
    stroke("#E493F2")
    arc(width,height,600,600, PI, HALF_PI)
    
     // Mic
    
    fill("black");
    stroke("gray");
    strokeWeight(1);
    rect(10,120,190,40,6);
    
    fill("black");
    circle(200,140,65)
  
    fill("gray");
    rect(160,120,15,40)
    
 
    
//     left fist
      fill("pink");
      noStroke();
      quad(45,100,60,100,65,131,50,134)
    
      //   fill("rgb(235,124,143)");
      // noStroke();
      // quad(45,100,60,100,64,123,49,123)
    
      fill("pink");
      noStroke();
      quad(65,95,95,85,100,148,79,148)
    
      //   fill("rgb(235,124,143)");
      // noStroke();
      // quad(65,95,95,85,98,123,74,123)
    
      fill("pink");
      noStroke();
      quad(100,85,120,85,125,140,105,140)
    
      //   fill("rgb(235,124,143)");
      // noStroke();
      // quad(100,85,120,85,124,123,103,123)
    
      fill("pink");
      noStroke();
      quad(126,95,140,95,140,130,125,130)
    
//       fill("rgb(235,124,143)");
//       noStroke();
//       quad(126,95,140,95,140,123,125,123)
    
      // thumb
      fill("pink");
      noStroke();
      rect(90,140,45,20,5)
      rect(118,140,25,35,3)
    
 //   palm
      fill("pink");
      noStroke();                                           quad(100,170,144,170,120,200,95,200);
    
      fill("rgb(235,124,143)");
      noStroke();
      quad(40,170,90,170,90,200,58,200);
    
//     left forearm
      fill("pink");
      noStroke();
      quad(60,205,120,205,120,270,44,290)
    
      fill("rgb(235,124,143)");
      noStroke();
      quad(94,205,120,205,120,270,94,277)
    
       //   phone
    fill('black');
    stroke('#9E9E9E');
    strokeWeight(6)
    rect(158,300,260,130, 6)
    // quad(158,350,385,244,424,366,197,464)
    
    
//     middle fist
    
      // top fingers
      fill("brown");
      noStroke();
      quad(195,285,222,265,233,345,200,350)
    
       fill("rgb(176,85,85)");
      noStroke();
      quad(196,300,226,300,233,345,200,350)

      fill("brown");
      noStroke();
      quad(233,258,275,250,285,348,245,350)
    
       fill("rgb(176,85,85)");
      noStroke();
      quad(238,300,279,300,285,348,245,350)

      fill("brown");
      noStroke();
      quad(280,255,315,250,320,317,290,325)

        fill("rgb(176,85,85)");
      noStroke();
      quad(287,300,318,300,320,317,290,325)
    
      fill("brown");
      noStroke();
      quad(320,260,350,260,350,305,325,310)
    
    fill("rgb(176,85,85)");
      noStroke();
      quad(324,300,351,300,350,305,325,310)

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

      //    middle forearm
    fill("brown");
    noStroke();
    quad(240,460,333,466,335,height,230,height);
    
     fill("rgb(176,85,85)");
    noStroke();
    quad(300,464,333,466,335,height,260,height);
    
    //   right fist with pencil and brush
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
    
    //   handle
      fill("brown")
      noStroke();
      rect(370,135,220,15,6);
    
    // clamp around brush 
      fill("black");
      noStroke();
      rect(370,135,15,15)
    
    
//     right fist
      fill("#00BCD4");
      noStroke();
      quad(445,101,460,100,465,131,450,134)
    
        fill("#168C9B");
      noStroke();
      quad(445,101,460,100,463,118,447,118)
    
      fill("#00BCD4");
      noStroke();
      quad(465,95,495,85,500,155,479,155)
    
        fill("#168C9B");
      noStroke();
      quad(465,95,495,85,498,118,470,118)
    
      fill("#00BCD4");
      noStroke();
      quad(500,85,520,85,525,140,505,140)
    
        fill("#168C9B");
      noStroke();
      quad(500,85,520,85,522,118,502,118)
    
      fill("#00BCD4");
      noStroke();
      quad(526,95,540,95,540,130,525,130)
    
     fill("#168C9B");
      noStroke();
      quad(526,95,540,95,540,118,525,118)
    
    // thumb
      fill("#168C9B");
      noStroke();
      rect(440,135,45,20,5)
      rect(440,135,25,35,3)
  
    //   palm
      fill("#00BCD4");
      noStroke();
      quad(500,160,544,160,530,200,500,200);
    
      fill("#168C9B");
      noStroke();
      quad(440,160,495,160,495,200,458,200);
    
//     right forearm
     fill("#00BCD4");
      noStroke();
      quad(460,208,530,208,540,300,458,330)
    
         fill("#168C9B");
      noStroke();
      quad(460,208,497,208,540,300,458,330)
    
    console.log("x", mouseX, "y", mouseY);
    
  }
  