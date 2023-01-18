let paragraphs = document.querySelectorAll("div p");
let message = "";
for(let i =0;i<paragraphs.length;i++){
    let newElement = paragraphs[i].textContent;
    message += `Selector text ${i}: ${newElement}\n`
}
alert(message);
console.log(paragraphs);