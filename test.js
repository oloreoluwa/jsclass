// const PlayStation = {
//     Name: "PlayStation 5",
//     Category: "Gaming console",
//     Price: 100,
//     Description: "Sleek, futuristic design with a white and black color scheme and blue LED accents.",
//     rates: 9.6,
//     discount: function() {
//         let Discounted= this.Price * 0.2;
//         let newprice = this.Price - Discounted;
//         return`${newprice}`
//     }
// };

// console.log(PlayStation.discount());

// // let i = 0;

// let original = [2, 4, 5, 6, 3, 8];
// let givennum = 5; // Example number to find
// let result = original.find(element => element === givennum);
// console.log(result);

const jambscore = [199, 200, 178, 234, 99]
const newscore = jambscore.map(function(score){
    return(score + 50);
    
})
console.log(newscore);