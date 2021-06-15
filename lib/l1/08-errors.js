// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// default error class in JS in Error

const e = new Error('yup');

// the standard try/catch/finally clauses exist
function broken() {
	try {
		throw e;
		console.log("Nope");
	} catch (e) {
		console.log("Catch");
	} finally {
		console.log("Will run no matter what");
	}
}

broken();

// although you can throw anything try to throw Error or subclasses of it

class MyError extends Error {
}
