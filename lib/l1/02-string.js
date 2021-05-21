// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// we use ' for strings but " also works in JS
let s = 'asd';

// strings are immutable
// s[0] = 'c'; // will err

console.log(s);

let a = s + 'asd'

console.log(a);

// let variables are not
a += a;

console.log(a);

// string templating is a very readable way to make strings

console.log(`Hello ${a} ${1 + 2}`);
