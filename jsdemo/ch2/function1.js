let cartItems = []
var cart = {}
cart.addItem = (item) => {
    cartItems.push(item)
    console.log(`${item} has been added to the cart`)
}

cart.removeItem = () => {
    console.log(`${cartItems.pop()} has been removed from the cart`)
}

cart.checkOut = () => {
    console.log(`You are checking out ${cartItems.length} items`)
    cartItems.map(item => {
        console.log(item)
    })
}


cart.addItem("prod1")
cart.addItem("prod2")
cart.addItem("prod3")
cart.removeItem("prod1")
cart.checkOut(2)