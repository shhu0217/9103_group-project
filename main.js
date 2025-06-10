let colorfulRings = []; 

let canvasSize = 1000; 
let canvasScale = 1; 
let ringNumbers = 10; 

function setup() {
  createCanvas(canvasSize, canvasSize, P2D);
  windowResized();
  generateRandomRings();
}

function draw() {
  background(0);

  showAllRings();
}

function windowResized() {
  let minWinSize = min(windowWidth, windowHeight);
  resizeCanvas(minWinSize, minWinSize);
  canvasScale = minWinSize / canvasSize;
}

function generateRandomRings() {
  for (let i = 0; i < ringNumbers; i++) {
    let x = random(canvasSize);
    let y = random(canvasSize);
    let size = random(canvasSize * 0.3, canvasSize * 0.5);

    let ring = new ColorfulRing(x, y, size);
    colorfulRings.push(ring);
  }
}

function showAllRings() {
  for (let ring of colorfulRings) {
    ring.show();
  }
}
