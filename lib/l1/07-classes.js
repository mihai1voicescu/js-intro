// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

// class syntax in JS is similar to other OOP languages
// unfortunately JS does not have concepts such as abstract classes and interfaces
// export exports the class so we can import it in other files
export class Animal {
	constructor(birthDate = Date.now(), name = 'unknown', species = 'unknown') {
		// usually private fields are marked with _
		this._birthDate = birthDate;
		this._name = name;
		this._species = species;
	}

	run() {
		// manual exception :)
		throw new Error("Not implemented");
	}

	greet() {
		console.log(`Hi, I am ${this._name}`);
	}

	// hide the set with a getter
	get birthDate() {
		return this._birthDate;
	}

	// hide the get with a setter
	set name(name) {
		this._name = name;
	}

	// getter and setters may contain function logic
	get age() {
		return Date.now() - this._birthDate;
	}

	// we also have class methods
	static create() {
		return new Array(Math.floor(Math.random() * 10)).fill(undefined).map(_ => new Animal());
	}
}

const animal = new Animal()

// the big advantage in js for setters and getter is that it looks like you are operating directly on the property
// this means you can easily change to a setter and getter afterwards if needed

console.log(animal.age);

// taking properties works too
console.log(animal._birthDate);

animal.name = "Rex";

animal.greet();

console.log(Animal.create());

export class Dog extends Animal {
	constructor(birthDate, name) {
		// super calls the parent constructor
		super(birthDate, name, 'dog');
	}

	// override greet
	greet() {
		console.log("Bark");

		// call first greet method from the parent up (Animal)
		super.greet();

		// call first run method from this up (Dog)
		this.run();

		// by default all objects are decedents of Object class
		console.log(this.valueOf());
	}

	run() {
		// do dog running
	}
}

const dog = new Dog();

dog.greet();
