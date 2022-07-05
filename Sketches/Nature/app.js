
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
  
  }

  function draw() {
    background(ring.color());

    fill(sky.color())
    rect(0,0,720,300)
  }