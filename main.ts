
class Point {
  x: number;
  y: number;

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
}

// instead we use constructors, which take the params defined above
// the question mark associated with the params means they are optional
// js does not allow for multiple constructors
let point1 = new Point();

// we can get rid of the 'assign values' step
//point1.x = 1;
//point1.y = 2;

// draw new point
point1.draw();
