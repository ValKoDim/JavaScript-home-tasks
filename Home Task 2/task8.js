let today = new Date();
let hours = today.getHours();
console.log(hours);


switch(true){
    case (hours < 5 && hours == 23):
        console.log('Good night');
        break;
    case(hours >=5 && hours < 11):
        console.log('Good morning');
        break;
    case (hours >=11 && hours < 17):
        console.log('Good day');
        break;
    case (hours >= 17 && hours < 23):
        console.log('Good evening');
        break;
}
    
