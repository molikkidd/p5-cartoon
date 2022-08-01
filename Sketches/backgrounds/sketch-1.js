function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("lavender");
  //   top arcs
    fill("pink")
    arc(width,0,200,200,HALF_PI,PI)
    
    stroke('#9C27B0')
    noFill()
    arc(width,height,200,200,PI,HALF_PI)
    
  //   stripes
    for (let i = 5; i < 600; i+=20) {
      stroke('#D0BEEF');
      strokeWeight(10);
      line(0,i,width,i);
    }
    
  //   bottom arcs
     stroke('pink')
    noFill()
    arc(0,0,200,200,0,HALF_PI)
    
    fill("#9C27B0")
    noStroke()
    arc(0,height,200,200,HALF_PI,0) 
    
    console.log("x", mouseX, "y", mouseY);
    
  }