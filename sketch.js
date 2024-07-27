let lengthSlider, angleSlider;
let initialLength=100;
let angle;

function setup() {
  createCanvas(600, 600);
  background(0,0,0);
  stroke(0);
  
  
  lengthSlider = createSlider(100, 200, 150);
  lengthSlider.position(10, 10);
  
  angleSlider = createSlider(0, TWO_PI, PI / 1, 0.01);
  angleSlider.position(10, 30);
  
}


function draw() {
  background(200);
  stroke("rgb(22,81,22)");
  
  
  let len = lengthSlider.value();
  let angle = angleSlider.value();
  
 
  translate(width / 2, height);
  
  
  branch(len, angle);
}

function branch(len, angle) {
  // Draw the current branch
  line(0, 0, 0, -len);
  translate(0, -len);
  
  // If the length is above a certain threshold, continue branching
  if (len > 6) {
    push();
    rotate(0 * angle);
    branch(len * 0.7, angle);
    pop();
    
    push();
    rotate(1 * -angle);
    branch(len * 0.7, angle);
    pop();
  }
  
  translate(0, len);
}

function mouseMoved() {
  redraw(0);
}