//Task 1: Create a function that reyurns the number of properties of an object

//Create demo class
let human = {
    name:'John Wick',
    age:'46',
    occupation:'assassin'
}
// Execution

propsCount(human);

// Function that returns the number of props
function propsCount(obj){

    console.log(Object.keys(obj).length);
    console.log(' ');
}

/*Task 2: Create a function which returns two arrays, one with the keys
another with the values*/

// Add two more properties to human
human.hasDog = false;
human.favGun = 'pistol';

// Execution
showProps(human);

// The function that returns the arrays
function showProps(obj){
console.log(Object.keys(obj));
console.log(Object.values(obj));}
console.log(' ');

/*Task 3: Create a student class which extends class person and
shows full name of student and his current course*/

// Creating the parent class
class Person {
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
    showFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}
// Creating the Student class which extends Person
class Student extends Person {
    constructor(firstName, lastName, year){
        super(firstName, lastName)
        this.year = year
    }
    showFullName(middleName){
        return `${this.firstName} ${middleName} ${this.lastName}`
    }
    
    showCourse(){
        let date = new Date();
        let currentYear = date.getFullYear();
        return currentYear - this.year;
    }
}

// Execution
let stud1 = new Student("Petro", "Petrenko", 2020);
let stud2 = new Student("George", "Peterson", 2019);

console.log(stud1.showFullName("Petrovych")); 
console.log("Current course: " + stud1.showCourse());
console.log(stud2.showFullName("Smith")); 
console.log("Current course: " + stud2.showCourse());
console.log(' ');

/*Task 4: Create worker class which displays the name and salary of the 
worker at the end find a way to sort them by salary descending*/

// Creating the Worker class
class Worker {
    constructor(fullName, dayRate, workingDays){
        this.fullName = fullName
        this.dayRate = dayRate
        this.workingDays = workingDays
    }
    #experience = 1.2;

    get showExp(){
        return this.#experience
    }
    set setExp(newExp){
        this.#experience = newExp
    }

    showSalary(){
        console.log(`${this.fullName} salary: ${this.dayRate * this.workingDays}`);
    }
    showSalaryWithExperience(){
        console.log(`${this.fullName} salary: ${(this.dayRate * this.workingDays) * this.#experience}`)
    }}



// Execution
let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

// Creating the new workers and sorting them by salary

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.setExp = 1.5;

let worker3 = new Worker("Andy Ander", 29, 23);
worker3.setExp = 1.5;

let arrWorkers= [worker1,worker2,worker3];

arrWorkers.sort((a,b) => (a.dayRate * a.workingDays) * a.showExp - 
(b.dayRate * b.workingDays) * b.showExp)

console.log('Sorted salary:');
for(let i =0;i< arrWorkers.length;i++){
    console.log(`${arrWorkers[i].fullName}: ${(arrWorkers[i].dayRate * arrWorkers[i].workingDays) * arrWorkers[i].showExp}`)
}
console.log(' ');

//Task 5: Create a hierarchyfor geometric shapes. Calculate their are, then total are

//Creating the parent class GeometricFigure
class GeometricFigure{

    getArea(){
        return 0
    }
    toString(){
        return Object.getPrototypeOf(this).constructor.name;
    }
}
// Creating the child classes

class Triangle extends GeometricFigure{
    constructor(height, base){
        super()
        this.height = height
        this.base = base
    }

    getArea(){
        return (this.height * this.base) / 2
    }
}

class Square extends GeometricFigure{
    constructor(side){
        super()
        this.side = side
    }

    getArea(){
        return this.side * this.side
    }
}

class Circle extends GeometricFigure{
    constructor(radius){
        super()
        this.radius = radius
    }
    getArea(){
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Creating the handleFigures function

// Find a way to check parent class *

function handleFigures(figures){
    let dummyObject = new GeometricFigure
    let total = 0;
    for(let i =0;i<figures.length;i++){
        if(false){
            console.log(`${figures[i].name} is not a valid geometrical shape`)
        }else{
            console.log(`Geometric figure: ${figures[i].toString()} - area ${figures[i].getArea()}`)
        }
        total += figures[i].getArea();
    }
    console.log(`Total: ${total}`)
}

// Execution
const figures = [new Triangle(4, 5), new Square(7), new Circle(5)];
handleFigures(figures);