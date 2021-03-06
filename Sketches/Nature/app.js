
function setup() {
    // Create the canvas
    createCanvas(720, 720);
  //   choose background color
    colorPicker = createColorPicker('#2196F3');
    treeTop = createColorPicker("#228B22");
    trunk = createColorPicker("#835613");
    sun = createColorPicker("#F8D60A");
    sky = createColorPicker("#87CEEB");
    ring = createColorPicker("#FFA500");
    face = createColorPicker("#C09105");
  
  }

  function draw() {
    background(colorPicker.color());
    // SKY
    fill(sky.color())
    rect(0,0,720,300)
    // TREETOP
    fill(treeTop.color())
    triangle(400,400,100,400,250,250)
    triangle(400,500,100,500,250,350)
    triangle(400,550,100,550,250,450)
    // TRUNK
    fill(trunk.color())
    rect(230,550,40,200)
    // SUN
    fill(sun.color())
    ellipse(100,100,200,200)
    fill(ring.color())
    ellipse(100,100,140,140)
    fill(colorPicker.color())
    ellipse(100,100,80,80)
    // GRASS
    fill(treeTop.color())
    rect(0,700,720,20);
    // FLOWER
    stroke(5)
    line(0,300,720,300)

    translate(500,600);
    noStroke();
    for (let i = 0; i < 10; i++) {
        ellipse(0,20,10,40);
        rotate(PI/5);
        
    }
  }