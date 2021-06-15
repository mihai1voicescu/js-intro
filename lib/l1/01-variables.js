// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// declares a variable in the current scope that can NOT be reassigned
const a = 0;

// a = 1; will error

// declares a variable in the current scope that can be reassigned
let b = 1;

b = 2;

// to print we use
console.log(a, b);

// declares a variable in the current function scope that can be reassigned
var c = 1;

console.log(c);
c += 1;
console.log(c);

// scope difference between var const and let
{
	let d = 1;
	const e = 1;
	var he = 3;
}

console.log(he);
// console.log(d); will err
// console.log(e); will err

// undeclared variables will err in strict mode
// nope = 3; will err

// global scope is defined by different scopes depending on the environment you are running (browser, node, etc)
// in Node.JS it's global
