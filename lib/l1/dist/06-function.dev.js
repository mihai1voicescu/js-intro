// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict'; // basic
// no types (:

function foo(a) {
  return a + 1;
} // anonymous


var a = function a(_a) {
  return _a + 1;
}; // arrow


var b = function b(a) {
  return a + 1;
}; // another bread and butter of JS is closures


var con = 3;

function f(a) {
  // this will take the closest available variable named c (same goes with a)
  return con + a;
} // this is very powerful as it allows us to store a state without much hassle


var by = 5;

function adder(by) {
  return function (a) {
    return a + by;
  };
} // same as before now


var c = adder(1);
console.log("===variable arguments==="); // in js there is no overloading and functions can receive any number of parameters

function p(a, b, c) {
  console.log(a, b, c);
} // perfectly valid


p(1); // if we want default arguments

function foo1(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asd';
} // but remember NO CHECK IS ISSUED WHEN A FUNCTION CALL OCCURS


foo1(undefined, 'still', 'valid'); // if you want to take the rest of the arguments

function foo2(a) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  console.log(rest); // the arguments variable is a special variable that returns ALL the passed arguments, regardless of the signature
  // warning: DO NOT ALTER THE arguments object, it's an optimization killer
  // try to use the spread (...) syntax

  console.log(arguments);
}

foo2(1, 2, 3, 4, 5);

function cool(param1, _ref) {
  var a = _ref.a,
      _ref$b = _ref.b,
      b = _ref$b === void 0 ? 2 : _ref$b,
      _ref$c = _ref.c,
      c = _ref$c === void 0 ? 3 : _ref$c;
  console.log('asd');
  console.log(arguments);
}

cool({
  a: 4,
  c: 'asd'
}); // const {a, b} = {a: 2, b: 3, c: 4};