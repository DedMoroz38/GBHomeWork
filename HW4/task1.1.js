//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};
//es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}
