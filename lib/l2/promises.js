'use strict';

// ******************* ex 1 ****************** //
// What’s the output of the code below?
let promise = new Promise(function(resolve, reject) {
    resolve(1);

    setTimeout(() => resolve(2), 1000);
});

promise.then(console.log);

// ******************* ex 2 ****************** //
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.
// The function delay(ms) should return a promise. That promise should resolve after ms
// milliseconds, so that we can add .then to it, like this:
function delay(ms) {
    return new Promise(function(resolve, reject) {
       setTimeout(() => resolve(), ms);
    });
}

delay(3000).then(() => alert('runs after 3 seconds'));











// function delay(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
//
// delay(3000).then(() => alert('runs after 3 seconds'));



// ******************* ex 3 ****************** //
// Are these code fragments equal? In other words,
// do they behave the same way in any circumstances, for any handler functions?
promise.then(f1).catch(f2);

promise.then(f1, f2);

// ******************* ex 4 ****************** //
//We have a “regular” function. How do we call an async fn from it and use its result?
async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

function f() {
    // ...what to write here?
    // we need to call async wait() and wait to get 10
    // remember, we can't use "await"
    wait().then(result => {
        console.log(result);
    });
}

f();