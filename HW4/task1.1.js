//es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}
Product2.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
};
