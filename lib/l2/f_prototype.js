'use strict';

// ******************* ex 1 ****************** //
// In the code below we create new Rabbit, and then try to modify its prototype.
function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// Rabbit.prototype = {}; (1)
// Rabbit.prototype.eats = false; (2)
// delete rabbit.eats; (3)
// delete Rabbit.prototype.eats; (4)

console.log(rabbit.eats); // ?

// ******************* ex 2 ****************** //
// Imagine, we have an arbitrary object obj, created by a constructor function
// – we don’t know which one, but we’d like to create a new object using it.
//
// Can we do it like that?

//let obj2 = new obj.constructor();

// Give an example of a constructor function for obj which lets such code
// work right. And an example that makes it work wrong.















/// Possible Solution
function User(name) {
    this.name = name;
}

let user = new User('John');
let user2 = new user.constructor('Pete');

console.log(user2.name); // Pete (worked!)



function User1(name) {
    this.name = name;
}
User1.prototype = {}; // (*)

let user3 = new User1('John');
let user4 = new user3.constructor('Pete');

console.log(user4.name); // undefined
