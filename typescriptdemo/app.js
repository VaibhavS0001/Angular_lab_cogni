"use strict";
exports.__esModule = true;
var Size;
(function (Size) {
    Size["small"] = "small";
    Size["medium"] = "medium";
    Size["large"] = "large";
})(Size || (Size = {}));
var Toppings;
(function (Toppings) {
    Toppings["chesse"] = "chesse";
    Toppings["veges"] = "veges";
    Toppings["paneer"] = "paneer";
})(Toppings || (Toppings = {}));
var pizzas;
pizzas = [
    {
        id: 10001,
        size: Size.small,
        price: 359,
        base: "base1",
        toppings: Toppings.chesse
    },
    {
        id: 10002,
        size: Size.large,
        price: 399,
        base: "base2",
        toppings: Toppings.veges
    },
];
console.log(pizzas);
function outForDelivery(pizza) {
    switch (pizza.toppings) {
        case Toppings.chesse:
            console.log("A ".concat(Toppings[pizza.toppings], " pizza is out for delivery"));
            break;
        case Toppings.veges:
            console.log("".concat(Toppings[pizza.toppings], " pizza is getting ready for delivery"));
            break;
        case Toppings.paneer:
            console.log("A ".concat(Toppings[pizza.toppings], " pizza is delivered with id: ").concat(pizza.id));
            break;
        default:
            console.log("Looking for delivery agent");
    }
}
pizzas.forEach(function (pizza) {
    outForDelivery(pizza);
});