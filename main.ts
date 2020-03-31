
class Point {
  //prefix field variable names w/ '_'
  constructor(private _x?: number, private _y?: number) {

  }

  draw() {
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }

  // getters and setters expose fields to user, must use capital letter
  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0)
      throw new Error('value cannot be less than 0.');

    this._x = value;
  }
}


let point1 = new Point(1, 2);
// now user can set x using lowercase x
point1.x = 5;
point1.draw();
