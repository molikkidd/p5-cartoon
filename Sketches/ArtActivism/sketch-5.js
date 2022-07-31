function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background("lavender");
  //   behind the stripes
    fill("#3F51B5")
    arc(width,0, 400,400,HALF_PI,PI)
    
    for (let i = 0; i < 400; i+=20) {
      stroke('#D0BEEF');
      strokeWeight(10);
      line(0,i,width,i);
    }
   
    //   pencil orb
    fill("pink");
    noStroke();
    arc(400,height,600,600,PI,PI + HALF_PI);
    
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
    rect(60,140,20,80,10,10,2)
    
    fill("#E190EF");
    arc(70,150,15,15, PI, 0)
    
    fill("purple");
    noStroke();
    quad(82,175,120,222,116,260,82,220);
  
    fill("purple");
    noStroke();
    quad(60,223,83,223,93,235,55,270);
  
    fill("purple");
    noStroke();
    quad(58,270,93,236,115,260,75,290);
  //   forearm
    fill("purple");
    noStroke();
    quad(61,281,73,293,86,height,53,height);
    
    fill("purple");
    noStroke();
    quad(77,295,90,285,95,height,90,height);
  
    fill("purple");
    arc(58,170,50,20, HALF_PI, PI+HALF_PI, CHORD)
  
   fill("purple");
    arc(58,200,30,15, HALF_PI, PI+HALF_PI, CHORD)
    
     fill("purple");
    arc(58,210,20,15, HALF_PI, PI+HALF_PI, CHORD)
    
  //   pencil
    
    fill('orange');
    noStroke();
    rect(65,50,10,90);
    
    fill("beige");
    noStroke();
    triangle(70,35,75,50,65,50)
    console.log("x", mouseX, "y", mouseY);
    
  }