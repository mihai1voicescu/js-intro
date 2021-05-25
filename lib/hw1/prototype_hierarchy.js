// turn JS in a more sane language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

function Person(name = 'unknown', birthDate = Date.now(), gender = 'unknown',
address = 'unknown', phone = 'unknown') {
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    this.address = address;
    this.phone = phone;
}

Person.prototype.sayHello = function() {
    console.log(`Hi! My names's ${this.name} and I am a person.`);
}

function Employee(name, birthDate, gender, address, phone, income) {
    Person.call(this, name, birthDate, gender, address, phone);
    this.income = income;
}

// update the income
Employee.prototype.payRaise = function(percentage) {
    this.income += this.income * percentage;
}

Employee.prototype.sayHello = function() {
    console.log(`Hi! My names's ${this.name} and I am a employee.`);
}


function Student(name, birthDate, gender, address, phone) {
    Person.call(this, name, birthDate, gender, address, phone);
    this.grades = new Map();
}

// print all the grades
Student.prototype.printGrades = function() {
    this.grades.forEach((key, value) => console.log(key, value));
    
}

// add a new grade
Student.prototype.evaluateStudent = function(subject, grade) {
    this.grades.set(grade, subject);
}

Student.prototype.sayHello = function() {
    console.log(`Hi! My names's ${this.name} and I am a student.`);
}

function Teacher(name, birthDate, gender, address, phone, income, subject) {
    Employee.call(this, name, birthDate, gender, address, phone, income);
    this.subject = subject;
}

Teacher.prototype.sayHello = function() {
    console.log(`Hi! My names's ${this.name} and I am a teacher.`);
}

function Admnistrator(name, birthDate, gender, address, phone, income) {
    Employee.call(this, name, birthDate, gender, address, phone, income);
}

Admnistrator.prototype.sayHello = function() {
    console.log(`Hi! My names's ${this.name} and I am a administrator.`);
}

function ProDean(name, birthDate, gender, address, phone, income) {
    Employee.call(this, name, birthDate, gender, address, phone, income); 
}

ProDean.prototype.sayHello = function() {
    console.log(`Hi! My names's ${this.name} and I am the ProDean.`);
}

function DepartamentHead(name, birthDate, gender, address, phone, income, subject) {
    Teacher.call(this, name, birthDate, gender, address, phone, income, subject);
    this.teachers = [];
}

// add a new Teacher() to the array
DepartamentHead.prototype.addTeacher = function(teacher) {
    this.teachers.push(teacher); 
}

// print all the teachers from the departament
DepartamentHead.prototype.printTeachers = function() {
    for (const teacher of this.teachers) {
        console.log(teacher);
    }
}

DepartamentHead.prototype.sayHello = function() {
    console.log(`Hi! My names's ${this.name} and I am from departament head.`);
}


// check if it works
let persons = [];

persons.push(new Person('John', '01-12-1997', 'male', '', '0787650981'));
persons.push(new Employee('Elena', '21-02-1997', 'female', '', '', 4000));
persons.push(new Student('Gabi', '21-02-1997', 'male', '', ''));
persons.push(new Teacher('Ana', '21-02-1997', 'female', '', '', 4500, 'math'));
persons.push(new Admnistrator('Cornelia', '21-02-1997', 'female', '', '', 5000));
persons.push(new ProDean('Marius', '21-02-1997', 'male', '', '', 6000));
persons.push(new DepartamentHead('Florin', '21-02-1997', 'male', '', '', 5000, 'music'));

persons.forEach(e => e.sayHello());
