function Person_p(birthDate, name, status) {
    this._birthDate = birthDate;
    this._name = name;
    this._status = status;
}

Person_p.prototype.birthDate = function() {
    return this._birthDate;
}

Person_p.prototype.name = function() {
    return this._name;
}

Person_p.prototype.status = function() {
    return this._status;
}

function Employee_p(birthDate, name, function_name) {
    Person_p.call(this, birthDate, name, 'employee');
    this._function_name = function_name;
    
}

Employee_p.prototype = Object.create(Person_p.prototype);
Employee_p.prototype.function_name = function() {
    return this._function_name;
}

function Teacher_p(birthDate, name) {
    Employee_p.call(this, birthDate, name, 'teacher');
}
Teacher_p.prototype = Object.create(Employee_p.prototype);

Teacher_p.prototype.evaluateStudent= function(student, grade) {
    student.grades().push(grade);
    return student.grades;
}

Teacher_p.prototype.teach = function() {
    console.log('This is your course');
}


function DepartmentHead_p(birthDate, name) {
    Teacher_p.call(this, birthDate, name);
}

DepartmentHead_p.prototype = Object.create(Teacher_p.prototype);

DepartmentHead_p.prototype.evaluateTeacher = function(teacher) {
    console.log('Teacher ' + teacher.name + ' has been evaluated');
}

DepartmentHead_p.prototype.collectFeedback = function() {
    console.log('Feedback collected');
}

function Administrator_p(birthDate, name) {
    Employee_p.call(this, birthDate, name, 'administrator');
}

Administrator_p.prototype = Object.create(Employee_p.prototype);

Administrator_p.prototype.work = function() {
    console.log('Work done');
}

function ProDean_p(birthDate, name) {
    Employee_p.call(this, birthDate, name, 'ProDean');
}

ProDean_p.prototype = Object.create(Employee_p.prototype);

ProDean_p.prototype.doTask = function() {
    console.log('My task is done');
}


function Dean_p(birthDate, name) {
    ProDean_p.call(this, birthDate, name, 'Dean');
}

Dean_p.prototype = Object.create(ProDean_p.prototype);

Dean_p.prototype.giveTaskToProdean = function(prodean) {
    console.log('Prodean' + prodean.name + 'has new task to do');
}

function Student_p(birthDate, name) {
    Person_p.call(this, birthDate, name, 'student');
    this._grades = []    
}

Student_p.prototype = Object.create(Person_p.prototype);
Student_p.prototype.grades = function() {
    return this._grades;
}

Student_p.prototype.promote = function(grades) {
    for (const grade of this.grades()) {
        if (grade < 5) {
            console.log('Did not promote :(');
            return ;
        }
    }
    console.log('Congrats!');
}

Student_p.prototype.giveFeedback = function() {
    console.log('Good job! Feedback done!');
}

const std3 = new Student_p(Date.now(), 'Popescu');
console.log(std3.birthDate());
console.log(std3.name());
console.log(std3.grades());
console.log(std3.status());

std3.giveFeedback();

const std4 = new Student_p(Date.now(), 'Georgescu');
console.log(std4.name());
console.log(std4.status());

const teacher2 = new Teacher_p(Date.now(), 'Popa');
console.log(teacher2.name());
teacher2.evaluateStudent(std3, 7);
teacher2.evaluateStudent(std3, 8);
teacher2.evaluateStudent(std4, 10);
teacher2.evaluateStudent(std4, 9);
teacher2.teach();

console.log(std3.name() + ': ' + std3.grades());
console.log(std4.name() + ': ' + std4.grades());

const adm2 = new Administrator_p(Date.now(), 'Sandu');
console.log(adm2.name());
console.log(adm2.status());
console.log(adm2.function_name());
adm2.work();

const deptHead2 = new DepartmentHead_p(Date.now(), 'Ionescu');
deptHead2.evaluateTeacher(teacher2.name());
deptHead2.collectFeedback();
deptHead2.evaluateStudent(std3, 4);
console.log('std3: ' + std3.grades());


const prodean2 = new ProDean_p(Date.now(), 'Popa');
const dean2 = new Dean_p(Date.now(), 'Iliescu');

console.log(prodean2.name());
console.log(prodean2.function_name());
prodean2.doTask();

console.log(dean2.name());
console.log(dean2.function_name());

std3.promote();
std4.promote();