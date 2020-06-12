// turn JS in a more sain language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// be very careful there are primitives, and their object counterpart

const s = 'asd';

const objS = new String('asd');

// the comparison will compare the memory address, so

console.log(s === 'asd');
console.log(objS === 'asd');

// the only advantage is that you can define additional properties on it

objS.a = 'asd';

// it's best to avoid it as it causes massive confusion and a lot of bugs
