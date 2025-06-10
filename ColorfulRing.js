class ColorfulRing {
  constructor(x, y, size) {
    this.xpos = x;
    this.ypos = y;
    this.size = size;
  }

  show() {
    push();
    translate(this.xpos * canvasScale, this.ypos * canvasScale);

    noStroke();
    fill(33, 85, 149);
    circle(0, 0, this.size * canvasScale);

    noStroke();
    fill(239, 174, 63);
    circle(0, 0, this.size * canvasScale * 0.66);

    noStroke();

    fill(200, 70, 97);
    circle(0, 0, this.size * canvasScale * 0.33);

    pop();
  }
}
