
class Point {
  x: number;
  y: number;

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  getDistance(another: Point) {
    // ...
  }
}

// this way of instantiating an object is verbose in ts 
let point1 = new Point;

// assign values
point1.x = 1;
point1.y = 2;

// draw new point
point1.draw();
