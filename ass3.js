let num1 = 15;
let num2 = 9;
let num3 = 22;
let num4 = 0;
let num5 = 62;

let lowest = num1; 

if (num2 < lowest) {
    lowest = num2; 
}

if (num3 < lowest) {
    lowest = num3; 
}

if (num4 < lowest) {
    lowest = num4; 
}

if (num5 < lowest) {
    lowest = num5; 
}


console.log(`The lowest number among ${num1}, ${num2}, ${num3}, ${num4} and ${num5} is ${lowest}.`);
