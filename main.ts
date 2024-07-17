#! /usr/bin/env node

class Person{
    name:string;
    age:number;
    constructor(name: string ,age: number){
        this.name = name;
        this.age = age
    }

};
class Student extends Person{
    
    rollNumber:string;
    courses :Course[]= [];
    constructor(rollNumber:string,name:string,age:number){
        super(name,age)
        this.rollNumber = rollNumber;

    }
    RegisterForCourses(course:Course){
        this.courses.push(course)
    }
}
class Instructor extends Person{
    salary:number;
    courses :Course[]= [];
    constructor(salary:number,name:string,age:number){
        super(name,age)
        this.salary = salary;

    }
    AssignCourse(course:Course){
        this.courses.push(course);
    }
}
class Course {
    id:number;
    name:string;
    students:Student []= [];
    instructor:Instructor[]=[];

    constructor(id:number,name:string){
        this.id = id;
        this.name = name
    }
    addStudent(std:Student){
        this.students.push(std)
    }
    addInstructor(ins:Instructor){
        this.instructor.push(ins)
    }
}

class Department {
    name:string;
    course:Course[]=[]
    constructor (name:string){
        this.name = name;
    }
    addCourse(course:Course){
        this.course.push(course)
    }
}
const Std1  = new Student("1","hamza",22);
const Std2 = new Student("2","majid",32);

const Instructor1 = new Instructor(20000,"Ahmad",34);
const Instructor2 = new Instructor(40000,"Nawab",40);

const Course1 = new Course(1,"Block chain");
const Course2 = new Course(2,"Gen AI");

Course1.addStudent(Std1);
Course2.addStudent(Std2);
Std1.RegisterForCourses(Course1)
Course1.addInstructor(Instructor1)
Course1.addInstructor(Instructor2)

const D1 = new Department ("Computer Science")
D1.addCourse(Course1)
console.log(D1.course[0]);


