// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict'; // brace yourselves

console.log(1 == 1);
console.log(1 == '1'); // yep, I know...
// someone thought this is a good idea...
// we use ===, which also compares the type of the elements

console.log(1 === '1'); //false
// string comparison is done the same

console.log('1' === '1'); // you have all the normal operators, but with a bit of stupidity...

console.log('=======');
console.log(1 < 2);
console.log(1 < '2');
console.log(1 < '0');
console.log('======= :)');
console.log(1 <= 1);
console.log(1 <= '1'); // console.log(1 <== '1'); not an operator

console.log('======='); // everything is false :)

console.log(1 < 'gj js');
console.log(1 > 'gj js');
console.log(1 == 'gj js');
console.log(1 === 'gj js');