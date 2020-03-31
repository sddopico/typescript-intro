let drawPoint = (x, y) => {
  // ...
}

//instead of passing many props, pass 1 obj w/ all related props
let drawPoint = (point) => {
  // ...
}

drawPoint({
  x: 1,
  y: 2
})

//inline notation kind of solves, but is verbose
let drawPoint = (point: {x: number, y: number}) => {
  // ...
}

//interfaces are prefered
interface Point {
  x: number,
  y: number
}

//now point is it's own custom type
let drawPoint = (point: Point) => {
  // ...
}
