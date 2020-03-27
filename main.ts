let log = function (message) {
  console.log(message);
}

//arrow style

let doLog = (message) => {
  console.log(message);
}

//another (less readable) formulation of arrow style
let goLog = message => {
  console.log(message);
}

//yet another formulation
let coLog = (message) => console.log(message);

//and another (less readable)
let foLog = message => console.log(message);

//with no params
let feuxLog = () => console.log();
