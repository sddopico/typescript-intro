var Point = /** @class */ (function () {
    // instead of making private fields and referring to this.x, we can add access
    // modifiers to the constructor and remove the verbose assignments
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Point;
}());
// now something like 'point1.x = 5' would not work because x is private
// only the draw() method is available
var point1 = new Point();
point1.draw();
