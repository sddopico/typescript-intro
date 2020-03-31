
class Point {
// instead of making private fields and referring to this.x, we can add access
// modifiers to the constructor and remove the verbose assignments
  constructor(private x?: number, private y?: number) {

  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}

// now something like 'point1.x = 5' would not work because x is private
// only the draw() method is available
let point1 = new Point();
point1.draw();
