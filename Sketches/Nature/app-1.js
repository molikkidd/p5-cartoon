
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('skyblue');
  
//     centerline
  stroke("beige");
  strokeWeight(2);
  line(200,0,200,height);
  
//     sun
  stroke("orange");
  fill("yellow");
  ellipse(100,100,100,100);
  
  // clouds
  fill("white");
  noStroke()
  ellipse(50,200,100,50)
  
  fill("lightgray");
  noStroke()
  ellipse(100,230,100,80)
  
  fill("gray");
  noStroke()
  ellipse(140,200,40,50);
  
//     green background
  fill("lightgreen")
  noStroke()
  rect(200,0,200,400);
  
//     treetop
  
   noStroke()
  fill("green");
  triangle(300,200,250,250,350,250)
  
    noStroke()
  fill("green");
  triangle(300,175,250,225,350,225)
  
    noStroke()
  fill("green");
  triangle(300,150,250,200,350,200)
  
    noStroke()
  fill("green");
  triangle(300,125,250,175,350,175)
//     trunk
  fill("brown");
  rect(290,250,20,150)
  
  fill("green");
  rect(200,390,200,10)
  
  

}