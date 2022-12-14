class Product{
    id: number
    name: String
    brand: String
    price: number
    constructor(id: number, name: String, brand: String, price: number){
        this.id = id
        this.brand = brand
        this.name = name
        this.price = price
    }
}

class ShoppingCart{

    constructor(public products: any){
    }

    calculateCart = () => {
        let sum = 0
        this.products.forEach((value: number, key: Product) => {
            sum += (key.price*value)
            console.log(`Price of ${value} ${key.brand} ${key.name} is ${key.price*value}`);
        });
        console.log(`which makes a total chekout of Rs.${sum}`)
    }
}

let products = new Map<Product, number>();
products.set(new Product(1,"shirt","denim", 3000), 4)
products.set(new Product(2,"T-shirt","denim", 2000), 12)
products.set(new Product(3,"Jeans","denim", 2500), 1)
let sh = new ShoppingCart(products)
sh.calculateCart()