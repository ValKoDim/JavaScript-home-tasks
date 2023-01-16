let userUnput = prompt('Input the ids of the user you wish to see.');

let arrInput = userUnput.split(' ');

let db = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

let message = '';

console.log(showUsers(arrInput));


function showUser(id){
    try{
        if(id <= 0 ){
            throw Error(`Id must not be negative: ${id}`);
        }
        if(!(id in db)){
            throw Error(`User with such Id does not exist in the database: ${id}`);
        }
        return user ={
            id: id
        } 
    }catch(exception){
        console.log(exception.message)
        return null;
    }
}

function showUsers(ids){

    let users = [];

    for(let i =0;i < ids.length;i++){

        let newUser = showUser(ids[i]);
        if(newUser != null){
            users.push(newUser);
        }
    }

    return users;
}