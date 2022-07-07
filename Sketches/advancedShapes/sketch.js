function setup() {
    createCanvas(500, 500);
  }
  
  function draw() {
    background('skyblue');
  //   square
    fill("#00BCD4");
    noStroke()
    rect(100,0,400,400);
    //   poster around eyes
    fill("gold");
    noStroke()
    rect(100,0, 200,200, 40)
  //   mouth
    fill('pink');
    arc(241,190,50,50,0,PI)
  //   eyebrows
    stroke("orange")
    strokeWeight(15)
    line(120,22,170,22)
    
    // fill("orange");
    stroke("orange")
    strokeWeight(10)
    line(245,32,270,32)
  //   eyes
    fill("white");
    stroke("black");
    strokeWeight(1)
    arc(160, 100, 75, 110, PI - QUARTER_PI, QUARTER_PI, OPEN);
  //   eyes
    fill("white")
    arc(260, 100, 75, 110, PI - QUARTER_PI, QUARTER_PI, OPEN);
  //   pupils
    fill("black")
    ellipse(134, 100,20,30)
    fill("black")
    ellipse(234, 100,20,30)
  //   nose
   
    fill("sandybrown");
    noStroke()
    ellipse(180,160,20,30);
    
    stroke('brown');
    noFill();
    arc(180,136, 40, 20, 0, HALF_PI) 
  
    console.log("X", mouseX, "Y", mouseY);
  
  //   floor
    fill("navy");
    noStroke()
    quad(100,400,500,400,500,500,0,500);
    
     for (let i = 0; i < 200; i+=20) {
       stroke("lightblue")
       strokeWeight(10)
       line(i+120,270,i+120,height-180)
       
       stroke("lightyellow")
       strokeWeight(10)
       ellipse(i+120,255,5,5)
    }
   
  //   cake
    fill("white");
    noStroke()
    rect(110,300,200,90,5)
    
   
    
  }