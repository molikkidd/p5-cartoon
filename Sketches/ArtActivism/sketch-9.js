function setup() {
    createCanvas(600, 500);
  }
  
  function draw() {
    background("lavender");
    
    
    fill("#00BCD4");
    strokeWeight(4);
    stroke("lightblue")
    arc(0,height,400,400, PI+HALF_PI, 0)
    
  //   stripes
    for (let i = 5; i < 600; i+=20) {
      stroke('#D0BEEF');
      strokeWeight(10);
      line(0,i,width,i);
    }
     
  //     upper arc
    
    fill("#00BCD4");
    strokeWeight(8);
    stroke("lightblue")
    arc(width,0,400,400, HALF_PI, PI)
    
  // Mic
    
    fill("black");
    stroke("gray");
    strokeWeight(1);
    rect(10,120,190,40,6);
    
    fill("black");
    circle(195,140,65)
  
    fill("gray");
    rect(160,120,15,40)
    
  // left fist for mic
      fill("#00BCD4");
      noStroke();
      rect(35,90,20,40,5)
    
      fill("#00BCD4");
      noStroke();
      rect(65,85,20,55,5)
    
      fill("#00BCD4");
      noStroke();
      rect(95,85,20,60,5)
    
      fill("#00BCD4");
      noStroke();
      rect(120,95,15,25,5)
    
    // thumb
      fill("#00BCD4");
      noStroke();
      rect(90,140,45,20,5)
      rect(118,140,25,35,3)
  
    //   palm
      fill("#00BCD4");
      noStroke();
      quad(100,170,144,170,120,200,95,200);
    
      fill("#00BCD4");
      noStroke();
      quad(40,170,90,170,90,200,58,200);
      
    //   phone
      fill("black");
      strokeWeight(3)
      stroke("gray")
      rect(200,300,170,80,6)
    
    // middle fist with phone
    // top fingers
      fill("brown");
      noStroke();
      rect(235,290,20,40,5)
    
      fill("brown");
      noStroke();
      rect(265,285,20,55,5)
    
      fill("brown");
      noStroke();
      rect(295,285,20,60,5)
    
      fill("brown");
      noStroke();
     rect(320,295,15,25,5)
    
    // thumb
      fill("brown");
      noStroke();
      // quad(300,260,330,270,340,285,300,280);
      rect(290,355,45,20,5)
      rect(318,355,25,35,3)
  
    //   palm
      fill("brown");
      noStroke();
      quad(300,385,344,385,320,430,295,430);
    
      fill("brown");
      noStroke();
      quad(240,385,290,385,290,430,258,430);
    
    //   pencil
    
    fill('orange');
    noStroke();
    rect(400,115,190,15);
    
    fill("beige");
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
    
    fill("pink");
      noStroke();
      rect(520,100,20,40,5)
  //   435
      fill("pink");
      noStroke();
      rect(495,95,20,55,5)
  //   465
      fill("pink");
      noStroke();
      rect(465,95,20,60,5)
  //   495
      fill("pink");
      noStroke();
      rect(445,105,15,25,5)
  //   520
    
    
    // thumb
      fill("pink");
      noStroke();
      rect(440,135,45,20,5)
      rect(440,135,25,35,3)
  
    //   palm
      fill("pink");
      noStroke();
      quad(500,160,544,160,530,200,500,200);
    
      fill("pink");
      noStroke();
      quad(440,160,495,160,495,200,458,200);
    
    
  
    console.log("x", mouseX, "y", mouseY);
    
  }
  