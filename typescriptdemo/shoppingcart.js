var Product = /** @class */ (function () {
    function Product(id, name, brand, price) {
        this.id = id;
        this.brand = brand;
        this.name = name;
        this.price = price;
    }
    return Product;
}());
var ShoppingCart = /** @class */ (function () {
    function ShoppingCart(products) {
        var _this = this;
        this.products = products;
        this.calculateCart = function () {
            var sum = 0;
            _this.products.forEach(function (value, key) {
                sum += (key.price * value);
                console.log("Price of ".concat(value, " ").concat(key.brand, " ").concat(key.name, " is ").concat(key.price * value));
            });
            console.log("which makes a total chekout of Rs.".concat(sum));
        };
    }
    return ShoppingCart;
}());
var products = new Map();
products.set(new Product(1, "shirt", "denim", 3000), 4);
products.set(new Product(2, "T-shirt", "denim", 2000), 12);
products.set(new Product(3, "Jeans", "denim", 2500), 1);
var sh = new ShoppingCart(products);
sh.calculateCart();
