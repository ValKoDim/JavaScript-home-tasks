// Creating and displaying the array
let array = [];
array.push(3);
array.push('apple');
array.push(true);
array.push(null);
alert(array.length);
// Adding the user input into the array
let userInput = prompt('Please insert an element.');
array.push(userInput);
alert(userInput);
// Deleting the first element and displaying it on the screen
array.shift();
alert(array);