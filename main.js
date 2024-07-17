#! /usr/bin/env node
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
;
class Student extends Person {
    rollNumber;
    courses = [];
    constructor(rollNumber, name, age) {
        super(name, age);
        this.rollNumber = rollNumber;
    }
    RegisterForCourses(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    salary;
    courses = [];
    constructor(salary, name, age) {
        super(name, age);
        this.salary = salary;
    }
    AssignCourse(course) {
        this.courses.push(course);
    }
}
class Course {
    id;
    name;
    students = [];
    instructor = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    addStudent(std) {
        this.students.push(std);
    }
    addInstructor(ins) {
        this.instructor.push(ins);
    }
}
class Department {
    name;
    course = [];
    constructor(name) {
        this.name = name;
    }
    addCourse(course) {
        this.course.push(course);
    }
}
const Std1 = new Student("1", "hamza", 22);
const Std2 = new Student("2", "majid", 32);
const Instructor1 = new Instructor(20000, "Ahmad", 34);
const Instructor2 = new Instructor(40000, "Nawab", 40);
const Course1 = new Course(1, "Block chain");
const Course2 = new Course(2, "Gen AI");
Course1.addStudent(Std1);
Course2.addStudent(Std2);
Std1.RegisterForCourses(Course1);
Course1.addInstructor(Instructor1);
Course1.addInstructor(Instructor2);
const D1 = new Department("Computer Science");
D1.addCourse(Course1);
console.log(D1.course[0]);
export {};
