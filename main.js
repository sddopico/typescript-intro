var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        // ...
    };
    return Point;
}());
// create new point object
var point1 = new Point;
// assign values
point1.x = 1;
point1.y = 2;
// draw new point
point1.draw();
