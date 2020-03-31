export class Point {
  //prefix field variable names w/ '_'
  constructor(private x?: number, private y?: number) {

  }

  draw() {
    console.log(`X: ${this.x}, Y: ${this.y}`);
  }
}
