class Person {
    constructor(birthDate, name = 'unknown', status = 'unknown') {
        this._birthDate = birthDate;
        this._name = name;
        this._status = status;
    }

    get birthDate() {
        return this._birthDate;
    }

    get name() {
        return this._name;
    }

    get status() {
        return this._status;
    }
}

class Employee extends Person {
    constructor(birthDate, name, function_name = 'unknown') {
        super(birthDate, name, 'employee');
        this._function_name = function_name;
    }

    get function_name() {
        return this._function_name;
    }
}

class Teacher extends Employee {
    constructor(birthDate, name) {
        super(birthDate, name, 'teacher');
    }

    evaluateStudent(student, grade) {
        student.grades.push(grade);
        return student.grades;
    }

    teach() {
        console.log('This is your course');
    }
}

class Administrator extends Employee {
    constructor(birthDate, name) {
        super(birthDate, name, 'administrator');
    }

    work() {
        console.log('Work done!');
    }
}

class DepartmentHead extends Teacher{
    constructor(birthDate, name) {
        super(birthDate, name);
    }

    evaluateTeacher(teacher) {
        console.log('Teacher ' + teacher.name + ' has been evaluated');
    }

    collectFeedback() {
        console.log('Feedback collected');
    }
}

class ProDean extends Employee {
    constructor(birthDate, name) {
        super(birthDate, name, 'ProDean')
    }

    doTask() {
        console.log('My task is done');
    }

}

class Dean extends ProDean {
    constructor(birthDate, name) {
        super(birthDate, name);
        this._function_name = 'Dean';
    }

    giveTaskToProdean(prodean) {
        console.log('Prodean ' + prodean.name + ' has new task to do');
    }

}

class Student extends Person {
    constructor(birthDate, name, grades = []) {
        super(birthDate, name, 'student');
        this._grades = grades;
    }

    get grades() {
        return this._grades;
    }

    promote() {
        for (const grade of this.grades) {
            if (grade < 5) {
                console.log('Did not promote :(');
                return;
            }
        }
        console.log('Congrats!');
    }

    giveFeedback() {
        console.log('Good job! Feedback done!');
    }
}

const std1 = new Student(Date.now(), 'Popescu');
const std2 = new Student(Date.now(), 'Georgescu');

const teacher = new Teacher(Date.now(), 'Popa');

const adm = new Administrator(Date.now(), 'Sandu');

const deptHead = new DepartmentHead(Date.now(), 'Ionescu');

const prodean = new ProDean(Date.now(), 'Popa');

const dean = new Dean(Date.now(), 'Iliescu');

console.log(std1.birthDate);
console.log(std1.name);
console.log(std1.grades);
console.log(std1.status);

console.log(std2.name);
console.log(std2.status);

console.log(teacher.name);
teacher.evaluateStudent(std1, 7);
teacher.evaluateStudent(std2, 9);
teacher.evaluateStudent(std1, 10);
teacher.evaluateStudent(std2, 6);
teacher.teach();

console.log(std1.name + ': ' + std1.grades);
console.log(std2.name + ': ' + std2.grades);

console.log(adm.name);
adm.work();
console.log(adm.status);
console.log(adm.function_name);

console.log(deptHead.name);
deptHead.evaluateTeacher(teacher);
deptHead.collectFeedback();
deptHead.evaluateStudent(std1, 4);
console.log('std1: ' + std1.grades);

console.log(prodean.name);
console.log(prodean.function_name);
prodean.doTask();

console.log(dean.name);
console.log(dean.function_name);

std1.promote();
std2.promote();

