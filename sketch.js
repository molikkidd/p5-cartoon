class Module {
    constructor(xOff, yOff, x, y, speed, unit) {
      this.xOff = xOff;
      this.yOff = yOff;
      this.x = x;
      this.y = y;
      this.speed = speed;
      this.unit = unit;
      this.xDir = 1;
      this.yDir = 1;
    }
  
    // Custom method for updating the variables
    update() {
      this.x = this.x + this.speed * this.xDir;
      if (this.x >= this.unit || this.x <= 0) {
        this.xDir *= -1;
        this.x = this.x + 1 * this.xDir;
        this.y = this.y + 1 * this.yDir;
      }
      if (this.y >= this.unit || this.y <= 0) {
        this.yDir *= -1;
        this.y = this.y + 1 * this.yDir;
      }
    }
  
    // Custom method for drawing the object
    draw() {
      fill(255);
      ellipse(this.xOff + this.x, this.yOff + this.y, 6, 6);
    }
  }
  
  let unit = 40;
  let count;
  let mods = [];
  
  
  function setup() {
    // Create the canvas
    createCanvas(720, 720);
  //   choose background color
    colorPicker = createColorPicker('#FFC107');
    treeTop = createColorPicker("#228B22");
    trunk = createColorPicker("#835613");
    sun = createColorPicker("#F8D60A");
    sky = createColorPicker("#87CEEB");
    ring = createColorPicker("#FFA500");
    face = createColorPicker("#C09105");
  //   add cirlces to background
    noStroke();
    let wideCount = width / unit;
    let highCount = height / unit;
    count = wideCount * highCount;
  
    let index = 0;
    for (let y = 0; y < highCount; y++) {
      for (let x = 0; x < wideCount; x++) {
        mods[index++] = new Module(
          x * unit,
          y * unit,
          unit / 2,
          unit / 2,
          random(0.05, 0.8),
          unit
        );
      }
    }
  }
  
  function draw() {
    background(colorPicker.color());
  // //   face
  //   fill(face.color());
  //   ellipse(290, 240, 400, 550)
    
  //  ABOVE THE LINE
    fill(sky.color());
    rect(0,0,720, 250)
    
  // left space
    fill(treeTop.color());
    rect(0,0, 130, 250);
    
    fill('lightgreen');
    rect(60,0, 70, 200);
    
    fill('beige');
    quad(60, 200, 130,200, 130, 250, 0, 250)
    
  //   divide
    stroke(4)
    line(0, 250, 720, 250)
    
  //   BELOW THE LINE
  //   right space
    fill(trunk.color())
    rect(130,250,720,720)
    
    // eyes
    fill("white")
    arc(200, 200, 100, 100, 15, PI - QUARTER_PI - QUARTER_PI - QUARTER_PI, OPEN);
    
      // eyes
    fill("white")
    arc(350, 200, 100, 100, 15, PI - QUARTER_PI - QUARTER_PI - QUARTER_PI, OPEN);
    
    fill("black");
    ellipse(160,200,20,32)
    
    fill("black");
    ellipse(310,200,20,32)
    
  //   eye brows
    noFill();
    stroke(5)
    arc(360, 160, 120, 120, PI + QUARTER_PI, TWO_PI);
    
    noFill();
    stroke(5)
    arc(200, 130, 100, 110, PI + QUARTER_PI, TWO_PI );
   
  //   NOSE
    noFill();
    
  stroke(0);
  curve(280, 390, 210, 310, 210, 340, 260, 300);
    
  stroke(0);
  curve(280, 300, 210, 330, 300, 330, 420, 5);
    
  stroke( 0);
  curve(280, 390, 310, 310, 305, 340, 250, 320);
    
    
  // lips
    
    fill("white");
    ellipse(250, 450, 75, 50)
    
   for (let i = 0; i < count; i++) {
      mods[i].update();
      mods[i].draw();
    } 
    
    star(120, 600, 30, 70, 5);
    }
  
  
  function star(x, y, radius1, radius2, npoints) {
    let angle = TWO_PI / npoints;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = x + cos(a) * radius2;
      let sy = y + sin(a) * radius2;
      vertex(sx, sy);
      sx = x + cos(a + halfAngle) * radius1;
      sy = y + sin(a + halfAngle) * radius1;
      vertex(sx, sy);
    }
    endShape(CLOSE);
  }
  