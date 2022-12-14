enum Size {
  small = "small",
  medium = "medium",
  large = "large",
}

enum Toppings {
  chesse = "chesse",
  veges = "veges",
  paneer = "paneer",
}

export interface Pizza {
  id: number;
  size: Size;
  price: number;
  base: String;
  toppings: Toppings;
}

let pizzas: Pizza[];

pizzas = [
  {
    id: 10001,
    size: Size.small,
    price: 359,
    base: "base1",
    toppings: Toppings.chesse,
  },
  {
    id: 10002,
    size: Size.large,
    price: 399,
    base: "base2",
    toppings: Toppings.veges,
  },
];

console.log(pizzas);

function outForDelivery(pizza: Pizza) {
  switch (pizza.toppings) {
    case Toppings.chesse:
      console.log(`A ${Toppings[pizza.toppings]} pizza is out for delivery`);
      break;
    case Toppings.veges:
      console.log(
        `${Toppings[pizza.toppings]} pizza is getting ready for delivery`
      );
      break;
    case Toppings.paneer:
      console.log(
        `A ${Toppings[pizza.toppings]} pizza is delivered with id: ${pizza.id}`
      );
      break;
    default:
      console.log("Looking for delivery agent");
  }
}

pizzas.forEach((pizza) => {
  outForDelivery(pizza);
});