let colorfulRings = []; 

let canvasSize = 1000; 
let canvasScale = 1; 
let ringNumbers = 100; 
let minRadius = canvasSize * 0.2; 
let maxRadius = canvasSize * 0.8; 
let maxAttempts = 100000; 
let lineWeight = 4; 

function setup() {
  createCanvas(canvasSize, canvasSize, P2D);
  windowResized();
  generateRandomRings();
}

function draw() {
  background(27, 67, 102);

  showAllRings();
}

//  Resize the canvas when the window is resized
function windowResized() {
  let minWinSize = min(windowWidth, windowHeight);
  resizeCanvas(minWinSize, minWinSize);
  canvasScale = minWinSize / canvasSize;
}

// Randomly generate circle objects with varying positions and sizes
function generateRandomRings() {
  let attempts = 0;
 
  while (colorfulRings.length < ringNumbers && attempts < maxAttempts) {
   
    let x = random(canvasSize);
    let y = random(canvasSize);
    let size = random(minRadius, maxRadius);

    let overlapping = false;
    // Check if the new circle overlaps with any existing ones
    for (let other of colorfulRings) {
      let d = dist(x, y, other.xpos, other.ypos);
      if (d < size * 0.25 + other.size * 0.25) {
        overlapping = true;
        break;
      }
    }

    // If not overlapping, add the new ring to the array
    if (!overlapping) {
      colorfulRings.push(new ColorfulRing(x, y, size));
    } else {
      attempts++;
    }
  }
}

//  Display all rings on the canvas
function showAllRings() {
  for (let ring of colorfulRings) {
    ring.show();
  }
}
