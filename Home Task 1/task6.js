let person = {
    firstName: 'Valentin',
    lastName: 'Dimitrov',
    studyGroup: 5,
    yearOfBirth: 1994,
    maritalStatus: false
}

for(const key in person){
    if(typeof(person[key]) == 'number'){
        console.log(person[key])
    }
}

for(const key in person){
    if(typeof(person[key]) == 'boolean'){
        console.log(person[key])
    }
}

for(const key in person){
    if(typeof(person[key]) == 'string'){
        console.log(person[key])
    }
}

let value = null;
let undefined;

console.log(value);
console.log(undefined);

