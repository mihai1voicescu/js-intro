// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var a = 1; // all numbers are stored as double precision floats
// (well this is not actually true, the interpreter is free to optimise as long as it looks like this)

var f = 0.1;
console.log(a + f); // Math keeps the more complicated operations

console.log(Math.floor(1.2)); // we are also a data science language :))

console.log(Math.pow(2, 3)); // careful with precision :)

console.log(0.1 + 0.2); // overflows are not possible here, but things can go very wrong

var i = Infinity;
console.log(i);
console.log(1 / 0);
var m = Number.MAX_SAFE_INTEGER;
console.log(m);
console.log(m + 0.9); // we also got NaN which stands from not a number

var n = NaN; // which is a number...
// *inserts mind blown gif*

console.log(typeof NaN === "undefined" ? "undefined" : _typeof(NaN)); // NaN is used to describe things that don't make sense with numbers

var nope = 1 - 'a';
console.log(nope);