let sideA = Number(prompt('Enter the first side of the triangle.'));
let sideB = Number(prompt('Enter the second side of the triangle.'));
let sideC= Number(prompt('Enter the third side of the triangle.'));
let isRight;
let area;

if(typeof(sideA) !== 'number' || typeof(sideB) !== 'number' 
|| typeof(sideC) !== 'number'){
    alert(typeof(sideA));
} else{
    if((sideA * sideA) + (sideB * sideB) == (sideC * sideC)){
        let area = (sideA * sideB) / 2;
        isRight = true;
        console.log(area.toFixed(3));
        console.log(isRight);
    }else{
        isRight = false;
        let S = (sideA + sideB + sideC) / 2;
        let area = Math.sqrt(S*(S-sideA)*(S-sideB)*(S-sideC));
        console.log(area.toFixed(3));
        console.log(isRight);
    }

}

