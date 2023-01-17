// Task 1: Create testThrow() function that accepts exceptions and displays its message.


let exception = new Error('An error has occured')

testThrow(exception);

function testThrow(error){

    console.log(error.name);
    console.log(error.message);
    console.log(error.stack)
    console.log('');
}

// Task 2: Create a function that calculates the are of a rectangle and throws exception if invalid data is inputed.


calcRectangleArea(4,4);
calcRectangleArea('k',2);

function calcRectangleArea(width, height){

    try{

        if(isNaN(parseFloat(width)) || isNaN(parseFloat(height)) 
        && width <= 0 && height <= 0){
            throw new Error('Please enter only numerical values.')
        } 
    console.log(width * height);
    }catch(exception){
        console.log(exception.message);
    }
}
