
class Point {
  private x: number;
  private y: number;

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }
}

// now something like 'point1.x = 5' would not work because x is private
// only the draw() method is available
let point1 = new Point();
point1.draw();
