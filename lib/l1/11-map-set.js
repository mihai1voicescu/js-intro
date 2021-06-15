// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// although you can use objects ar Map and Set, it does not yield good performance
// besides this Map and Set work on any value

const m = new Map();
const o = {};

m.set("a","b");
o["a"] = "b";

console.log(o);

console.log(m.get("a"));
m.delete("a");
console.log(m.get("a"));

const k = {};


m.set(k,"b");

// this will convert to the toString value of obj k
o[k] = "b";

console.log(o);

console.log(m.get(k));
m.delete(k);
console.log(m.get(k));

