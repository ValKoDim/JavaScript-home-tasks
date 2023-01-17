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
// Task 4: Creating the Student class which extends Person
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