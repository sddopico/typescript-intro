
class Point {
  constructor(private x?: number, private y?: number) {

  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }

  // getters and setters expose fields to user, must use capital letter
  get X() {
    return this.x;
  }

  set X(value) {
    if (value < 0)
      throw new Error('value cannot be less than 0.');

    this.x = value;
  }
}


let point1 = new Point(1, 2);
// now user can set x, but must use capital X so getter/setter variables don't
// conflict w/ fields
point1.X = 5;
point1.draw();
