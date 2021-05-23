// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

export class Person {
    constructor(name = 'unknown', birthDate = Date.now(), gender = 'unknown',
                address = 'unknown', phone = 'unknown') {
		this._name = name;
        this._birthDate = birthDate;
        this._gender = gender;
        this._address = address;
        this._phone = phone;
	}

    get name() {
        return this._name;
    }

    get birthDate() {
        return this._birthDate;
    }

    set address(address) {
        this._address = address;
    }

    set phone(phone) {
        this._phone = phone;
    }

	get age() {
		return Date.now() - this._birthDate;
	}

    sayHello() {
        console.log(`Hi! My names's ${this._name} and I am a person.`);
    }
}

export class Employee extends Person {
    constructor(name, birthDate, gender, address, phone, income) {
		// super calls the parent constructor
		super(name, birthDate, gender, address, phone);
        this._income = income;
	}

    set income(income) {
        this._income = income;
    }

    get income() {
        return this._income;
    }

    // update the income
    payRaise(percentage) {
        this._income += this.income * percentage;
    }

    // override
    sayHello() {
        console.log(`Hi! My names's ${this._name} and I am a employee.`);
    }
}

export class Student extends Person {
    constructor(name, birthDate, gender, address, phone) {
		// super calls the parent constructor
		super(name, birthDate, gender, address, phone);
        this._grades = new Map();
	}

    // print all the grades
    printGrades() {
        this._grades.forEach((key, value) => console.log(key, value));
    }

    // add a new grade
    evaluateStudent(subject, grade) {
        this._grades.set(grade, subject);
    }

    // override
    sayHello() {
        console.log(`Hi! My names's ${this._name} and I am a student.`);
    }
}

export class Teacher extends Employee {
    constructor(name, birthDate, gender, address, phone, income, subject) {
		// super calls the parent constructor
		super(name, birthDate, gender, address, phone, income);
        this.subject = subject;
	}

     // override
     sayHello() {
        console.log(`Hi! My names's ${this._name} and I am a teacher.`);
    }
}

export class Admnistrator extends Employee {
    constructor(name, birthDate, gender, address, phone, income) {
		// super calls the parent constructor
		super(name, birthDate, gender, address, phone, income);
	}


    // override
    sayHello() {
        console.log(`Hi! My names's ${this._name} and I am a administrator.`);
    }
}

export class ProDean extends Employee {
    constructor(name, birthDate, gender, address, phone, income) {
        // a single instance
        if (!!ProDean.instance) {
            return ProDean.instance;
        }
        // super calls the parent constructor
        super(name, birthDate, gender, address, phone, income);
        ProDean.instance = this;

        return this;
	}

    // override
    sayHello() {
        console.log(`Hi! My names's ${this._name} and I am the ProDean.`);
    }
}

export class DepartamentHead extends Teacher {
    constructor(name, birthDate, gender, address, phone, income, subject) {
		// super calls the parent constructor
		super(name, birthDate, gender, address, phone, income, subject);
        this._teachers = [];
	}

    // add a new Teacher() to the array
    addTeacher(teacher) {
        this._teachers.push(teacher); 
    }

    // print all the teachers from the departament
    printTeachers() {
        for (const teacher of this._teachers) {
            console.log(teacher);
        }
    }

    // override
    sayHello() {
        console.log(`Hi! My names's ${this._name} and I am from departament head.`);
    }
}