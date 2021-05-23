// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict'; // empty array

var a = []; // with elements

var ar = [1, 'a', {}, Infinity, true]; // note: try to keep an array with only one type, for performance reasons and readability

var b = [0, 1, "==="]; // arrays are 0 indexed

console.log(b[0] === 0); // true
// classic loop

for (var i = 0; i < b.length; i++) {
  console.log(b[i]);
} // for of
// preferred method


for (var _i = 0, _b = b; _i < _b.length; _i++) {
  var element = _b[_i];
  console.log(element);
} // warning: for in iterates over the keys, in this case the indices


for (var index in b) {
  console.log(b[index]);
} // we also have some functional methods


b.forEach(function (e) {
  return console.log(e);
});
console.log(b.map(function (e) {
  e = 4;
}));
console.log(b.filter(function (e) {
  return typeof e === 'number';
}));
var aer = [{
  a: 2
}, {
  a: 3
}];
aer.forEach(function (e) {
  return e.a += 1;
});