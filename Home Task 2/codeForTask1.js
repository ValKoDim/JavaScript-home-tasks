let x = 1;
let y = 2;

let res1 = x + `${y}`;
console.log(res1); // "12" //Add the code, you must use the variables x and y
console.log(typeof res1); // "string"

let res2 =  String(typeof(x)==typeof(y)); //Add the code, you must use the variables x and y
console.log(res2); // "true"
console.log(typeof res2); // "string"

let res3 = typeof(x)==typeof(y); //Add the code, you must use the variables x and y
console.log(res3); // true
console.log(typeof res3); // "boolean"

let res4 = NaN + x + y; //Add the code, you must use the variables x and y
console.log(res4); // NaN
console.log(typeof res4); // "number"
