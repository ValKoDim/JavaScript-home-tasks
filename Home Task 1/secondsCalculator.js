let seconds = 0;
let hours = prompt('Please, input the amount of hours.');
seconds = (hours * 60) * 60;
let days = prompt('Please input the amount of days.');
seconds = seconds + ((days * 24) * 60) * 60;
let months = prompt('Please input the amount of months.');
seconds = seconds + (((months * 30) * 24) * 60) * 60;
alert(seconds);