// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// basic
// no types (:
function foo(a) {
	return a + 1;
}

// anonymous
const a = function (a) {
	return a + 1;
}

// arrow
const b = a => a + 1;

// another bread and butter of JS is closures

const con = 3;

function f(a) {
	// this will take the closest available variable named c (same goes with a)
	return con + a;
}

// this is very powerful as it allows us to store a state without much hassle
const by = 5;
function adder(by) {
	return function (a) {
		return a + by;
	}
}

// same as before now
const c = adder(1);

console.log("===variable arguments===");

// in js there is no overloading and functions can receive any number of parameters

function p(a, b, c) {
	console.log(a, b, c);
}

// perfectly valid
p(1);


// if we want default arguments
function foo1(a, b = 3, c = 'asd') {

}

// but remember NO CHECK IS ISSUED WHEN A FUNCTION CALL OCCURS
foo1(undefined, 'still', 'valid');

// if you want to take the rest of the arguments
function foo2(a, ...rest) {
	console.log(rest);

	// the arguments variable is a special variable that returns ALL the passed arguments, regardless of the signature
	// warning: DO NOT ALTER THE arguments object, it's an optimization killer
	// try to use the spread (...) syntax
	console.log(arguments);
}

foo2(1, 2, 3, 4, 5);


function cool(param1, {a, b = 2, c = 3}) {
	console.log('asd')
	console.log(arguments);
}

cool({
	a: 4,
	c: 'asd'
});

// const {a, b} = {a: 2, b: 3, c: 4};