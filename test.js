const PlayStation = {
    Name: "PlayStation 5",
    Category: "Gaming console",
    Price: 100,
    Description: "Sleek, futuristic design with a white and black color scheme and blue LED accents.",
    rates: 9.6,
    discount: function() {
        let Discounted= this.Price * 0.2;
        let newprice = this.Price - Discounted;
        return`${newprice}`
    }
};

console.log(PlayStation.discount());