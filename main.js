var log = function (message) {
    console.log(message);
};
//arrow style
var doLog = function (message) {
    console.log(message);
};
//another (less readable) formulation of arrow style
var goLog = function (message) {
    console.log(message);
};
//yet another formulation
var coLog = function (message) { return console.log(message); };
//and another (less readable)
var foLog = function (message) { return console.log(message); };
//with no params
var feuxLog = function () { return console.log(); };
