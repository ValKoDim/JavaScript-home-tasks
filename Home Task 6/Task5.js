let header = document.querySelector("body h1");
header.style.backgroundColor = "lightgreen"

let paragraphs = document.querySelectorAll("div p")
paragraphs[0].style.fontWeight = "bold";
paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline"
paragraphs[3].style.fontStyle = "italic"

let horiontalText = [];
let parentUl = document.getElementById('myList');
let newLi = document.createElement('li');

while(parentUl.firstElementChild){
    horiontalText.push(parentUl.firstElementChild.textContent);
    parentUl.removeChild(parentUl.firstElementChild)
    
}
newLi.textContent = horiontalText.join('');
parentUl.appendChild(newLi);

let span = document.querySelector('span');
span.style.display = 'none';