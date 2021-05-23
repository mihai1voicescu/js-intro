// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict'; // objects are the bread and butter of JS
// they allow a very fast developing speed
// similar to dicts in Py or instantly defined structs in C
// this is an empty object

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var obj = {}; // filled object
// anything that resolves to a string can be used as a key (property name)
// values can be anything

var obj1 = {
  a: 2,
  c: 'a',
  // this places the reference there, like in Java, modifying the properties of obj has effects on all
  // instances of obj
  objRef: obj,
  // if the property name (key) matches the value you wish to assign you can use this shorthand
  obj: obj,
  1: 2,
  2: 'a' // 2: 'a' -> errs, keys must be unique

};
console.log('===property access==='); // properties can be accessed either with . or with the [value] syntax, similar to Py

console.log(obj1.a);
console.log(obj1['a']);
console.log(obj1[1]); //same property

console.log(obj1[1] === obj1['1']);
console.log('===references==='); // they point to the same memory zone on the heap

console.log(obj);
console.log(obj1.obj);
console.log(obj1.objRef);
console.log(obj === obj1.objRef && obj1.objRef === obj1.obj); // if I modify the memory zone

obj.a = 1; // changes reflect everywhere

console.log(obj1.obj); // you notice that properties do not have to be declared beforehand

console.log('===reference cmp==='); // warning, === and == compares the value stored at the variable
// in case of references it compares the address of the memory zone, therefore the variables must point to the same
// memory zone to be equal

console.log({} === {});
var m = {};
var a = m;
console.log(a === m); // there are multiple ways to declare objects, but are out of the scope of this presentation

console.log('===null vs undefined==='); // there are 2 values for nothing in JS

var u = undefined; // the variable is not set

var n = null; // the variable is explicitly set to nothing
// remember they mean very different things

console.log(undefined == null); // true

console.log(undefined === null); // false

console.log('===serde==='); // serialization in JS is usually done with JSON

var serObj = {
  2: 3
};
var ser = JSON.stringify(serObj);
console.log(ser);
console.log(_typeof(ser)); // string

console.log(JSON.parse(ser));
console.log(_typeof(JSON.parse(ser))); // object
// while properties set to null are serialized, undefined ones are not

console.log(JSON.stringify({
  un: undefined,
  n: null,
  a: 2
})); // {"n":null,"a":2}
// changing property type

console.log('===type===');
var t = {
  a: 3
};
console.log(t);
t.a = 'a';
console.log(t); // deleting properties from object

console.log('===delete===');
var o = {
  a: 3,
  b: 3,
  n: 3
};
console.log(o);
o.a = undefined;
o.n = null;
console.log(o); // we can use delete to delete properties, but be careful, deleting properties IS A MAJOR PERFORMANCE PROBLEM!!

delete o.b;
console.log(o); // the Object global variable has a lot of handy functions for manipulating objects

console.log(Object.keys(o));
console.log(Object.values(o)); // and the for in statement can be used to iterate over the keys of objects

for (var key in o) {
  console.log(key);
  console.log(o[key]);
}