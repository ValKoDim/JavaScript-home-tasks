let age = prompt('Please input your age.');

checkAge(age);

function checkAge(age){

try{
if(age.length == 0){
    throw new Error('The field is empty! Please enter your age');
 }
else if(!Number.isInteger(age)){
    throw new Error('Please use only numerical values.')
 }
 else if(age < 14){
    throw new Error('Users under the age of 14 are not allowed.')
 }

 alert('Welcome to Netplix, enjoy the movie.')
 console.log('Welcome');
}catch(exception){
    age = Number(prompt(exception.message))
    checkAge(age);
}
}
