/* Warm-up race */
console.log("Horse A");
console.log("Horse B");
console.log("Horse C");


/* Explanation
JavaScript is synchronous!*/

/* Race 1 */
// setTimeout(() => console.log("Horse A"), 1000);
// console.log("Horse B");

/* Race 2 */
// setTimeout(() => console.log("Horse A"), 0);
// console.log("Horse B");

/* Race 3 */
setTimeout(() => console.log("Horse A"), 0);
//wait60Seconds(); //some incredibly expensive synchronous computation
console.log("Horse B");

/* Race 4 */
// const asyncOperation = fetch('something.com');
// asyncOperation.then((resolvedValue) => console.log("Horse A"));
// console.log("Horse B");

/* Race 5 */
// setTimeout(() => console.log("Horse A"), 0);
// const promise1 = Promise.resolve();
// promise1.then(() => console.log("Horse B"));
// console.log("Horse C");

/* Race 6 */
// setTimeout(() => console.log("Horse A"), 5);
// const promise2 = new Promise((resolve) => {
//     setTimeout(() => resolve(), 10);
// });
// promise2.then(() => console.log("Horse B"));
// console.log("Horse C");
