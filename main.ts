
//interfaces are prefered
interface Point {
  x: number,
  y: number
}

//now point is it's own custom type
let drawPoint = (point: Point) => {
  // ...
}

//but these two should live together according to cohesion principle we need a class instead
class Point {
  x: number;
  y: number;

  draw() {
    // ...
  }

  getDistance(another: Point) {
    // ...
  }
}

//now all like things live together
//like in other strongy typed languages, functions in a class are called methods
//no need to pass point obj param to methods because they can access the point obj properties nativel
