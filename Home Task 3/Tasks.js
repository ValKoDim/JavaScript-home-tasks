// Task 1 : Use for and while lop to sum numbers in an array

let numbers = [2,3,4,5];
let sum = 0;
for(let i =0;i < numbers.length;i++){
    sum += numbers[i];
}
console.log(sum);
sum = 0;

while(numbers.length > 0){
    sum += numbers.pop();
}

console.log(sum);
console.log('');

// Task 2: Use for loop to check which numbers up to 15 are odd and even

for(let i = 0;i <= 15; i++){

    console.log(`${i} is ${i % 2 ==0 ? "is an even number" : "is an odd number"} `)

};

console.log('');

// Task 3: Create a function to fill an array with random numbers from 0 to 500

let array = new Array(5);

randArray(array);

function randArray(arr){

    for(let i = 0; i < arr.length; i++){

        let rand = Math.floor(Math.random() * (500 + 1));
        arr[i] = rand;
    }
}

console.log(array);
console.log('');

//Task 4: Create a function that raise a number to N degree

// To DO...


//Task 5: Create a function that finds the smallest number in an array.

let arr = [12,14,4,-4,0.2];

console.log(findMin(arr));
console.log('');


function findMin(array){
    return Math.min(...array);
}

// Task 6: Find if all elements inside an array are unique.

let arrA = [1,2,3,5,3];
let arrB = [1,2,3,5,11];

console.log(findUnique(arrA));
console.log(findUnique(arrB));

function findUnique(array){
    let numbersChecked = [];
    for(let i=0;i< array.length;i++){
        if(array[i] in numbersChecked){
            return false;
        }
        numbersChecked.push(array[i])
    }
    return true;
}

console.log('');

//Task 7: Create a function that returns the last number in an array or the last x numbers.

array = [3,4,10,-5];

console.log(lastElem(array));
console.log(lastElem(array,2));
console.log(lastElem(array,8));
console.log('');

function lastElem(arr,x){

    if(x == undefined){x = 1;}
    return arr.slice(arr.length -x)
}

//Task 8: Create a function that takes a string and converts every first letter into upper case.

let input = 'i love java script';

console.log(toUpperCase(input));


function toUpperCase(string){

    let array = string.split(' ');
    for(let i = 0;i < array.length;i++){
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    array = array.join(' ');
    return String(array);
}

