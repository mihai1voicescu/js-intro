// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// empty array
const a = [];

// with elements
const ar = [1, 'a', {}, Infinity, true];
// note: try to keep an array with only one type, for performance reasons and readability


const b = [0, 1, "==="];

// arrays are 0 indexed
console.log(b[0] === 1); // true

// classic loop
for (let i = 0; i < b.length; i++) {
	console.log(b[i]);
}

// for of
// preferred method
for (const element of b) {
	console.log(element);
}

// warning: for in iterates over the keys, in this case the indices
for (const index in b) {
	console.log(b[index]);
}

// we also have some functional methods
b.forEach(e => console.log(e));

console.log(b.map(e => {
	e = 4;
}));

console.log(b.filter(e => typeof e === 'number'));

const aer = [{a:2}, {a:3}];

aer.forEach(e => e.a += 1);

