class ColorfulRing {
  constructor(x, y, size) {
    this.xpos = x; 
    this.ypos = y; 
    this.size = size; 

    //  Randomize the order of circle types
    this.typeOrder = shuffle([1, 2, 3]);
    
    this.colorPatterns = shuffle([
      " #1d1f73",
      " #3e9189",
      " #57b652",
      " #7eafcb",
      " #d7442a",
      " #de76be",
      " #e78e43",
      " #e1c162",
      " #3e0707",
    ]);
  }

  //  Render the visual appearance of the ring
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

  //  Draw circle type 1
  drawType1Circle(s) {
    
    stroke(this.colorPatterns[1]);
    strokeWeight(lineWeight);
    fill(this.colorPatterns[0]);
    circle(0, 0, s);

    
    noStroke();
    fill(this.colorPatterns[1]);

    let r = s / 2;
    let sapcing = s * 0.04; 
    if (sapcing <= 0) return;
    let circleNum = ceil(r / sapcing); 
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

  // Draw circle type 2: line segment pattern
  drawType2Circle(s) {
    // Draw the background color
    stroke(this.colorPatterns[2]);
    strokeWeight(lineWeight);
    fill(this.colorPatterns[1]);
    circle(0, 0, s);

    // Calculate line segments within the circle
    let lineNum = s * 0.3; 
    let lineDt = TWO_PI / lineNum; 
    let linePath = []; 
    let innerRadius = s * 0.25; 
    let outterRadius = s * 0.45; 

    for (let i = 0; i < lineNum; i++) {
      let angle = i * lineDt;

      let innerx = innerRadius * cos(angle);
      let innery = innerRadius * sin(angle);
      let outterx = outterRadius * cos(angle);
      let outtery = outterRadius * sin(angle);

      linePath.push({ x: innerx, y: innery });
      linePath.push({ x: outterx, y: outtery });
    }

    // Draw line segments inside the circle
    stroke(this.colorPatterns[2]);
    strokeWeight(2);
    noFill();
    beginShape();
    for (let pt of linePath) {
      vertex(pt.x, pt.y);
    }
    endShape(CLOSE);
  }

  // Draw circle type 3: concentric ring pattern
  drawType3Circle(s) {
    
    stroke(this.colorPatterns[3]);
    strokeWeight(lineWeight);
    fill(this.colorPatterns[2]);
    circle(0, 0, s);

    
    let sapcing = s * 0.1; 
    if (sapcing <= 0) return;
    let circleNum = round(s / sapcing); 

    for (let i = circleNum - 1; i >= 0; i--) {
      let raduis = i * sapcing;
      let c = i % 2 === 0 ? this.colorPatterns[3] : this.colorPatterns[2];
      noStroke();
      fill(c);
      circle(0, 0, raduis);
    }
  }
}
