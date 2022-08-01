function setup() {
    createCanvas(600, 500);
  }
  
  function draw() {
    background("lavender");
    
    
    fill("#FFEB3B");
    noStroke();
    arc(0,height,400,400, PI+HALF_PI, 0)
    
  //   stripes
    for (let i = 5; i < 600; i+=20) {
      stroke('#D0BEEF');
      strokeWeight(10);
      line(0,i,width,i);
    }
     
//     middle circle
    
    fill("#FFEB3B");
    noStroke();
    circle(300,300,400)
    
//     upper arc
    
     fill("#00BCD4");
    noStroke();
    arc(width,0,300,300, HALF_PI, PI)
    
//     mic 
    
    fill("black");
    noStroke()
    circle(85,155,60)
    
    fill("black")
    noStroke();
    quad(70,180,100,180,100,310,70,310)
    
    
//     hand for mic
    
      fill("rgb(230,147,162)");
      noStroke();
      rect(65,204,20,15,5)
    
      fill("rgb(230,147,162)");
      noStroke();
      rect(65,220,35,15,5)
    
      fill("rgb(230,147,162)");
      noStroke();
      rect(65,240,30,15,5)
    
      fill("rgb(230,147,162)");
      noStroke();
      rect(65,260,20,10,5)
    
      fill("rgb(232,68,97)");
      noStroke();
      rect(85,220,25,18,5)
    
  
    
//     palm
    
     fill("rgb(230,147,162)");
      noStroke();
     quad(100,240,116,240,115,265,100,270)
    
       fill("rgb(230,147,162)");
      noStroke();
     quad(100,270,115,265,110,300,100,300)
    
    
    //   phone
    fill("black");
    strokeWeight(3)
    stroke("gray")
    rect(200,200,170,80,6)
    
    // yellow medium fist right side
    // top fingers
      fill("rgb(230,147,162)");
      noStroke();
      // quad(235,190, 255,190,260,235,245,237)
      rect(235,190,20,40,5)
    
      fill("rgb(230,147,162)");
      noStroke();
      // quad(265,177, 290,177, 291,245,268,245)
      rect(265,185,20,55,5)
    
      fill("rgb(230,147,162)");
      noStroke();
      // quad(295,185, 318,185, 312,232,296,232)
      rect(295,185,20,60,5)
    
      fill("rgb(230,147,162)");
      noStroke();
      // quad(320,200,340,200,330,230,320,230);
     rect(320,195,15,25,5)
    
    // thumb
      fill("rgb(230,147,162)");
      noStroke();
      // quad(300,260,330,270,340,285,300,280);
      rect(290,255,45,20,5)
      rect(318,255,25,35,3)
  
  //   palm
      fill("rgb(230,147,162)");
      noStroke();
      quad(300,285,344,285,320,330,295,330);
    
      fill("rgb(230,147,162)");
      noStroke();
      quad(240,285,290,285,290,330,258,330);
    
  //   forearm
     fill("rgb(230,147,162)");
      noStroke();
      quad(258,333, 320,333, 320,height,258,height);
    
    // pink small hand left side top
  //   thumbnail
      
    fill("purple");
    noStroke();
    rect(460,140,20,80,10,10,2)
    
    fill("#E190EF");
    arc(470,150,15,15, PI, 0)
    
    fill("purple");
    noStroke();
    quad(482,175,520,222,516,260,482,220);
  
    fill("purple");
    noStroke();
    quad(460,223,483,223,493,235,455,270);
  
    fill("purple");
    noStroke();
    quad(458,270,493,236,515,260,475,290);
  //   forearm
    fill("purple");
    noStroke();
    quad(461,281,473,293,486,height,453,height);
    
    fill("purple");
    noStroke();
    quad(477,295,490,285,495,height,490,height);
  
    fill("purple");
    arc(458,170,50,20, HALF_PI, PI+HALF_PI, CHORD)
  
   fill("purple");
    arc(458,200,30,15, HALF_PI, PI+HALF_PI, CHORD)
    
     fill("purple");
    arc(458,210,20,15, HALF_PI, PI+HALF_PI, CHORD)
    
  //   pencil
    
    fill('orange');
    noStroke();
    rect(465,50,10,90);
    
    fill("beige");
    noStroke();
    triangle(470,35,475,50,465,50)
    console.log("x", mouseX, "y", mouseY);
    
  }
