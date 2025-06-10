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

    if (this.typeOrder[0] === 1) {
      this.drawType1Circle(this.size * canvasScale);
    } else {
      this.drawType3Circle(this.size * canvasScale);
    }

    pop();
  }

  drawType1Circle(s) {

    stroke(this.color2);
    strokeWeight(lineWeight);
    fill(this.color1);
    circle(0, 0, s);

    noStroke();
    fill(this.color2);

    let r = s / 2;
    let sapcing = s * 0.04; 
    let circleNum = r / sapcing; 
    let spotNum = s * 0.2; 
    let spotDt = TWO_PI / spotNum; 
    let offset = 0; 
    let offsetDt = s * 0.1;

    for (let i = 0; i < circleNum - 1; i++) {
      offset += offsetDt;
      for (let j = 0; j < spotNum; j++) {
        let angle = j * spotDt + offset;
        let raduis = i * sapcing;

        let spotX = raduis * cos(angle);
        let spotY = raduis * sin(angle);
        circle(spotX, spotY, s * 0.03);
      }
    }
  }

  drawType2Circle(s) {
    noStroke();
    fill(this.color2);
    circle(0, 0, s);
  }

  drawType3Circle(s) {

    stroke(this.color3);
    strokeWeight(lineWeight);
    fill(this.color2);
    circle(0, 0, s);

    let sapcing = s * 0.1; 
    let circleNum = s / sapcing; 

    for (let i = circleNum - 1; i >= 0; i--) {
      let raduis = i * sapcing;
      let c = i % 2 === 0 ? this.color3 : this.color2;
      noStroke();
      fill(c);
      circle(0, 0, raduis);
    }
  }
}
