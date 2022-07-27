function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("#00BCD4");
    
    fill("pink");
    stroke("rgb(248,141,160)")
    strokeWeight(10)
    arc(0,0,600,600,0, PI + HALF_PI);
  //   stripes
    
  for (let i = 0; i < 600; i+=20) {
       stroke("#DF93EC");
       strokeWeight(5)
       line(i+10,i,i,height)
       
       fill("lightyellow")
       noStroke()
       ellipse(i+10,i,i,10)
    }
    
  //   arc pattern
    
    fill("beige");
    stroke("rgb(248,141,160)")
    strokeWeight(10)
    arc(600,600,600,600,PI, PI + HALF_PI);
    
    
    
    
  //   pencil
    
  //   fill("white");
  //   noStroke();
  //   quad(92,265,427,177,432,202,101,282)
    
  //   fill("white");
  //   noStroke();
  //   triangle(431,175,468,185,436,201)
    
  // //  brush
    
  //   fill("beige");
  //   noStroke();
  //   quad(36,235,491,215,496,240,36,265)
    
  //   fill("rgb(239,239,207)");
  //   noStroke();
  //   circle(500,230,40,40)
    
    
  // top fingers
    fill("brown");
    noStroke();
    quad(183,185,222,165,233,245,200,250)
    
    fill("brown");
    noStroke();
    quad(233,158,275,150,285,248,245,250)
    
    fill("brown");
    noStroke();
    quad(280,155,315,150,320,217,290,225)
    
    fill("brown");
    noStroke();
    quad(320,160,350,160,350,205,325,210)
    
  //   thumb
    fill("brown");
    noStroke();
    quad(300,247,360,230,370,270,305,275);
    
    fill("brown");
    noStroke();
    quad(332,270,370,270,373,280,335,295);
    
  //   palm
    
    fill("brown");
    noStroke();
    quad(300,300,373,280,335,360,240,355);
    
    fill("brown");
    noStroke();
    quad(203,278,294,261,300,290,232,352);
    
     fill("brown");
    noStroke();
    quad(197,261,233,255,243,275,203,279);
    
  //   forearm
    fill("brown");
    noStroke();
    quad(233,365,333,372,335,590,203,590);
  //   utensils
    
    console.log("X", mouseX, "Y", mouseY)
    
  }