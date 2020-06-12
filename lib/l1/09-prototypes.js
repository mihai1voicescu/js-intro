// turn JS in a more sain language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// import our classes
// somebody though it was a good idea to have to put the extension in the new import syntax...
import {Dog, Animal} from './07-classes.js';

// as you can see when imported, the script side from the 07-classes.js also runs, this is why it's a good idea
// to separate class files from the scrip part
console.log("=================");

// so, JS does not have traditional inheritance, it has something called prototype inheritance

const dog = new Dog();

let p = Object.getPrototypeOf(dog);

do {
	console.log(p);
	p = Object.getPrototypeOf(p);
} while (p);

// it looks like dog_instance -> animal_instance -> object_instance but this is not what happens

// we in fact have an object -> Dog.prototype -> Animal.prototype -> Object.prototype

// the class syntax is in fact
function Foo() {
	this._name = 3;
}

Foo.prototype.log = function () {
	console.log(this._name);
}

const f = new Foo();
f.log();

// weird no?

// want to see something even more strange?

const a = new Animal();
f.greet = a.greet;

f.greet(); // Hi, I am 3


// this is because of how the this is decided, it's decided at call time
// this means the function will receive as the this value the value preceding the function call

f.a = a;

// a is before the function call, this is set to a
f.a.greet(); // Hi, I am unknown

// but what does new Foo() actually do?
// the new syntax actually creates an empty object with the prototype set to the prototype of the function
// afterwards it runs the function with the this set to the new object

// extending classes is actually pretty basic in JS
// when we extend Dog with Animal actually what happens is that the prototype of Dog.prototype is set to Animal.prototype

// when you access a property on an object (no matter the type) what actually happens is JS searches for the first
// available property that matches that name starting from the current object up the prototype chain

// static methods are actually defined on the function itself, because in JS pretty much everything is an object
// including functions
Foo.myStaticFunction = () => console.log("yep");

// even more interesting a object can have as prototype any other object making for some interesting stuff
const p1 = {
	a: 3,
	b: 4
};

// create an empty object with it's prototype set to p1
const p2 = Object.create(p1);

console.log(p2.a === p1.a); // true
p2.a = 4;
console.log(p2.a === p1.a); // false

// WARNING NEVER EVER EVER CHANGE AN OBJECTS PROTOTYPE ONCE CREATED
// this is a major deoptimization, it's better to just create another copy
const p3 = Object.create(Foo.prototype);
Object.assign(p3, p2);
p3.log()
