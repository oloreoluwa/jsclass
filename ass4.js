// // const product = [
// //     {
// //         Name: "nike airforce",
// //         Category: "Footwears",
// //         Price: 100,
// //         Description: "Sleek and modern with cushioned insoles for comfort, often featuring vibrant colors and brand logos.",
// //         rates: 9.5,
// //         discount: function() {
// //             let Discounted= this.Price * 0.2;
// //             let newprice = this.Price - Discounted;
// //             return`Their is a discount on the product so you are paying $${newprice}`
// //         }
// //         },
// //     {
// //         Name: "OX",
// //         Category: "Fan",
// //         Price: 70,
// //         Description: "Metal and plastic, with sturdy construction for durability",
// //         rates: 9.0,
// //         discount: function() {
// //             let Discounted= this.Price * 0.2;
// //             let newprice = this.Price - Discounted;
// //             return`Their is a discount on the product so you are paying $${newprice}`
// //         }
// //         },
// //     {
// //         Name: "Iphone 11",
// //         Category: "Mobile Device",
// //         Price: 400,
// //         Description: "Constructed with a glass front and back, framed by aerospace-grade aluminum",
// //         rates: 9.7,
// //         discount: function() {
// //             let Discounted= this.Price * 0.2;
// //             let newprice = this.Price - Discounted;
// //             return`Their is a discount on the product so you are paying $${newprice}`
// //         }
// //         },
// //     {
// //         Name: "Dr.Martens",
// //         Category: "Footwears",
// //         Price: 80,
// //         Description: "High-quality leather or vegan alternatives, featuring smooth, textured, or patent finishes. The soles are made from durable rubber.",
// //         rates: 9.2,
// //         discount: function() {
// //             let Discounted= this.Price * 0.2;
// //             let newprice = this.Price - Discounted;
// //             return`Their is a discount on the product so you are paying $${newprice}`
// //         }
// //         },
// //     {
// //         Name: "PlayStation 5",
// //         Category: "Gaming console",
// //         Price: 900,
// //         Description: "Sleek, futuristic design with a white and black color scheme and blue LED accents.",
// //         rates: 9.6,
// //         discount: function() {
// //             let Discounted= this.Price * 0.2;
// //             let newprice = this.Price - Discounted;
// //             return`Their is a discount on the product so you are paying $${newprice}`
// //         }
     
// //     }
    
    
    
          
    
// // ]
// // // console.log(`Name: ${product[0].Name}, PRICE: ${product[0].discount()}`);
// // // console.log(`Name: ${product[1].Name}, PRICE: ${product[1].discount()}`);
// // // console.log(`Name: ${product[2].Name}, PRICE: ${product[2].discount()}`);
// // // console.log(`Name: ${product[3].Name}, PRICE: ${product[3].discount()}`);
// // // console.log(`Name: ${product[4].Name}, PRICE: ${product[4].discount()}`);
// // for(let i = 0; i < product.length; i++){
// //     console.log(product[i].Name);
// //     console.log(product[i].discount());
// // }

// // let i = 0;

// let original = [2, 4, 5, 6, 3, 8];
// let givennum = 5; // Example number to find
// let result = original.find(element => element === givennum);
// console.log(result);

const jambscore = [199, 200, 178, 234, 99]
jambscore.forEach(function(score){
    console.log(score + 50);
})