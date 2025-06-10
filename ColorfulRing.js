class ColorfulRing {
  constructor(x, y, size) {
    this.xpos = x; 
    this.ypos = y; 
    this.size = size; 

    this.typeOrder = shuffle([1, 2, 3]);

    this.color1 = color(random(255), random(255), random(255));
    this.color2 = color(random(255), random(255), random(255));
    this.color3 = color(random(255), random(255), random(255));
  }

  show() {
    push();
    translate(this.xpos * canvasScale, this.ypos * canvasScale);

    for (let i = 0; i < this.typeOrder.length; i++) {
      let scaling = 1 - (i + 1) / this.typeOrder.length;
      let size = this.size * canvasScale * scaling;
      let type = this.typeOrder[i];
      if (type === 1) {
        this.drawType1Circle(size);
      } else if (type === 2) {
        this.drawType2Circle(size);
      } else if (type === 3) {
        this.drawType3Circle(size);
      }
    }
    pop();
  }

  drawType1Circle(s) {
    noStroke();
    fill(this.color1);
    circle(0, 0, s);
  }

  drawType2Circle(s) {
    noStroke();
    fill(this.color2);
    circle(0, 0, s);
  }

  drawType3Circle(s) {
    noStroke();
    fill(this.color3);
    circle(0, 0, s);
  }
}
