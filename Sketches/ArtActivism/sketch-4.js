function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("beige");
    
  
    
  //   stripes
    
  for (let i = 0; i < 600; i+=20) {
       stroke("rgb(246,222,226)");
       strokeWeight(10)
       line(i+10,0,i,300)
       
       stroke("rgb(246,222,226)");
       strokeWeight(10)
       line(0,i+300,600,i+300)
    }
    
  //   arc pattern
    
    fill("pink");
    stroke("rgb(248,141,160)")
    strokeWeight(10)
    arc(0,0,300,300,0, PI + HALF_PI);
    
    fill("beige");
    stroke("gold")
    strokeWeight(10)
    arc(600,450,800,800,PI - HALF_PI, PI + HALF_PI);
    
  //   pencil
    
    fill("#FF9800");
    noStroke();
    quad(262,270,467,203,468,223,278,292)
    
    fill("#FFC107");
    noStroke();
    triangle(470,205,496,212,470,224)
    
  // //  brush
    
    fill("#FFEB3B");
    noStroke();
    quad(230,237,589,217,581,231,225,265)
    
    fill("#F9E31F");
    noStroke();
    circle(580,226,25,25)
    
    
  // top fingers
    fill("#FFC107");
    noStroke();
    quad(300,200,330,195,335,255,310,255)
    
    fill("#FFC107");
    noStroke();
    quad(340,185,365,180,375,260,345,260)
    
    fill("gold");
    noStroke();
    quad(373,195,395,193,400,240,379,246)
    
    fill("gold");
    noStroke();
    quad(403,201,415,200,416,231,404,234)
    
  //   thumb
    fill("gold");
    noStroke();
    quad(382,260,420,250,425,280,385,280);
    
    fill("gold");
    noStroke();
    quad(405,280,425,280,425,290,405,295);
    
  //   palm
    
    fill("gold");
    noStroke();
    quad(387,295,425,290,406,340,340,345);
    
    fill("gold");
    noStroke();
    quad(318,288,377,272,380,294,337,340);
    
     fill("gold");
    noStroke();
    quad(311,269,336,267,345,282,319,290);
    
  //   forearm
    fill("gold");
    noStroke();
    quad(341,351,407,346,432,590,333,590);
  //   utensils
    
    console.log("X", mouseX, "Y", mouseY)
    
  }function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("beige");
    
  
    
  //   stripes
    
  for (let i = 0; i < 600; i+=20) {
       stroke("rgb(246,222,226)");
       strokeWeight(10)
       line(i+10,0,i,height)
       
       // fill("lightyellow")
       // noStroke()
       // ellipse(i+10,i,i,10)
    }
    
  //   arc pattern
    
      fill("pink");
    stroke("rgb(248,141,160)")
    strokeWeight(10)
    arc(0,0,300,300,0, PI + HALF_PI);
    
    fill("beige");
    stroke("rgb(248,141,160)")
    strokeWeight(10)
    arc(600,600,600,600,PI, PI + HALF_PI);
    
  //   phone
    fill('black');
    stroke('#9E9E9E');
    strokeWeight(6)
    quad(158,250,385,144,424,266,197,364,8)
    // rect(150,200,280,130,8)
    
  //   pencil
    
  //   fill("#FF9800");
  //   noStroke();
  //   quad(92,265,427,177,432,202,101,282)
    
  //   fill("#FFC107");
  //   noStroke();
  //   triangle(431,175,468,185,436,201)
    
  // //  brush
    
  //   fill("#FFEB3B");
  //   noStroke();
  //   quad(36,235,491,215,496,240,36,265)
    
  //   fill("#F9E31F");
  //   noStroke();
  //   circle(500,230,40,40)
    
    
  // top fingers
    fill("#00BCD4");
    noStroke();
    quad(183,185,222,165,233,245,200,250)
    
    fill("#00BCD4");
    noStroke();
    quad(233,158,275,150,285,248,245,250)
    
    fill("#00BCD4");
    noStroke();
    quad(280,155,315,150,320,217,290,225)
    
    fill("#00BCD4");
    noStroke();
    quad(320,160,350,160,350,205,325,210)
    
  //   thumb
    fill("#00BCD4");
    noStroke();
    quad(300,247,360,230,370,270,305,275);
    
    fill("#00BCD4");
    noStroke();
    quad(332,270,370,270,373,280,335,295);
    
  //   palm
    
    fill("#00BCD4");
    noStroke();
    quad(300,300,373,280,335,360,240,355);
    
    // fill("brown");
    // noStroke();
    // quad(203,278,294,261,300,290,232,352);
    
    //  fill("brown");
    // noStroke();
    // quad(197,261,233,255,243,275,203,279);
    
  //   forearm
    fill("#00BCD4");
    noStroke();
    quad(233,365,333,372,335,590,203,590);
  //   utensils
    
    console.log("X", mouseX, "Y", mouseY)
    
  }