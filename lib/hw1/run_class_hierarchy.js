// turn JS in a more sain language
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

import {Person, Student, Employee, Teacher, Admnistrator, ProDean, DepartamentHead} from './class_hierarchy.js';

let persons = [];

persons.push(new Person('John', '01-12-1997', 'male', '', '0787650981'));
persons.push(new Employee('Elena', '21-02-1997', 'female', '', '', 4000));
persons.push(new Student('Gabi', '21-02-1997', 'male', '', ''));
persons.push(new Teacher('Ana', '21-02-1997', 'female', '', '', 4500, 'math'));
persons.push(new Admnistrator('Cornelia', '21-02-1997', 'female', '', '', 5000));
persons.push(new ProDean('Marius', '21-02-1997', 'male', '', '', 6000));
persons.push(new DepartamentHead('Florin', '21-02-1997', 'male', '', '', 5000, 'music'));

persons.forEach(e => e.sayHello());

console.log('========');

let student = new Student();
student.evaluateStudent('math', 10);
student.evaluateStudent('english', 8);
student.evaluateStudent('chemistry', 9);
student.printGrades();

console.log('========');

let depart = new DepartamentHead();
depart.addTeacher(new Teacher('Ana', '21-02-1997', 'female', '', '', 4500, 'math'));
depart.addTeacher(new Teacher('Iulia', '21-02-1997', 'female', '', '', 4500, 'math'));
depart.printTeachers();
