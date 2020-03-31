export class Point {
    //prefix field variable names w/ '_'
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log(`X: ${this.x}, Y: ${this.y}`);
    }
}
