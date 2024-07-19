/*let num1 = 5
let num2 = 5
let mun3 = 7
let age = 18
let age1 = 17

let student = 'andrew';

if(age => age1){
    console.log('You are register and can vote, Please proceed')
}
else if(age => age1){
    console.log('You are not register and cannot vote, try again when you are 18')
}
else{
    console.log('Please leave')
}*/

/*let year = 2008;
 if(year % 4 == 0){
    console.log('you were born on a leap year');
 }
 else{
    console.log("you weren't born on a leap year");
 }*/


 /*let year = 2008
 switch (year) {
    case 2001:
        console.log('it is not a leap year');
        break;
    case 2003:
        console.log('it is not a leap year');
        break;
    case 2008:
        console.log('it is a leap year');
        break;
    case 2008:
        console.log('it is a leap year');
        break;

    default:
        console.log('none are leap years');
 }*/

/*num = 1
while( num <= 20){
    console.log(num);
    num += 1
}*/
/*num = 5
do{
    num++
    console.log(num);
}while(num <= 20)
*/

/*for(let x = 30; x >= 15; x--){
   
    if(x == 20){
        continue;
    }
    console.log(x);
}*/

/*num = 0
do{
    num += 2
    console.log(num);
}while (num < 9)*/

// for(let num=1; num <=10; num++){
//     if(num % 2 == 0){
//         continue;
//     }
//     console.log(num);
// }



/*let user = 'Mayowa';
console.log(`Hello ${user}`)

console.log(`3 + 4 is ${3 + 4} not ${'3' + '4'}`);


console.log(!(3==3));
// *

/*
const human = function (name){
    console.log(`hello ${name}`);
}
human("semilore")
human("victor")
human("daniel")
human("dozie")
human("moses")
human("pelumi")
*/

// addition function
// function addition(num1,num2){
//     console.log(`${num1} + ${num2} = ${num1 + num2}`);
// }

// addition(5,6)
// addition(3,5)
// addition(4,9)
// addition(7,8)
// addition(6,7)

// while loop

const multiplication = (num1,num2)=> {
    let i = 1;
    while(i <= num2){
    console.log(`${num1} * ${i} = ${num1 * i}`);
    i++
}
}
multiplication(2,12);
multiplication(3,12);

// for loop
// const multiplication = (num1,num2)=> {
//     for(i = 1; i <= num2; i++) {
//     console.log(`${num1} * ${i} = ${num1 * i}`);
// }
// }
// multiplication(2,12);
// multiplication(3,12);
// multiplication(4,12);


// const andrew = [["Apple","Orange","Pineapple"],["bag","lunchbag","shoe"]]
// const andruw = ["pencil", "ruler", "eraser"]
// // const joint =[...andrew,...andruw]
// // console.log(joint);
// console.log(...andrew, ...andruw);

// const product = ["bag", "pen", "book", "shoe", "laptop"]
// console.log(product[1], product[4]);

// const Product = {
//     Name: "Indomie",
//     category: "food",
//     price: 8000,
//     decription: "noodles",
//     rating: 9.2
// }
// console.log(Product.Name);
// console.log(Product.price);