class car {
    constructor(id, name, brand, price) {
        this.id = id
        this.name = name
        this.brand = brand
        this.price = price
    }
    get name() {
        return this._name
    }
    get brand() {
        return this._brand
    }
    get price() {
        return this._price
    }
    get id() {
        return this._id
    }

    set name(val) {
        this._name = val
    }
    set brand(val) {
        this._brand = val
    }
    set price(val) {
        this._price = val
    }
    set id(val) {
        this._id = val
    }

}

let cars = []
let storage = window.localStorage
let table = document.createElement('TABLE')
table.id = "cars"
table.border = "1"
let row = document.createElement('TR')
row.id = "row"
let cid = document.createElement("TH");
cid.textContent = "Id"
let cname = document.createElement("TH");
cname.textContent = "Name"
let cbrand = document.createElement("TH");
cbrand.textContent = "Brand"
let cprice = document.createElement("TH");
cprice.textContent = "Price"
row.appendChild(cid)
row.appendChild(cname)
row.appendChild(cbrand)
row.appendChild(cprice)
table.appendChild(row)
function add(event) {
    event.preventDefault()
    if (storage.getItem("cars")) {
        cars = JSON.parse(storage.getItem("cars"))
    }
    let carform = document.getElementsByName('AddCars')
    let id = carform[0]['id'].value
    let name = carform[0]['name'].value
    let brand = carform[0]['brand'].value
    let price = carform[0]['price'].value
    cars.push(new car(id, name, brand, price))
    storage.setItem('cars', JSON.stringify(cars))
    cars.forEach(car => {
        let row = document.createElement('TR')
        row.id = "row"
        let cid = document.createElement("TD");
        cid.textContent = car.id
        let cname = document.createElement("TD");
        cname.textContent = car.name
        let cbrand = document.createElement("TD");
        cbrand.textContent = car.brand
        let cprice = document.createElement("TD");
        cprice.textContent = car.price
        row.appendChild(cid)
        row.appendChild(cname)
        row.appendChild(cbrand)
        row.appendChild(cprice)
        table.appendChild(row)
    })
    document.body.appendChild(table)
}

function pop() {
    console.log(cars.pop())
    console.log("These are the cars remaining")
    cars.forEach(car => {
        console.log(car)
    })
}

function splicer() {
    console.log(cars.splice(1, 1))
    console.log("These are the cars remaining")
    cars.forEach(car => {
        console.log(car)
    })
}

function splicea() {
    console.log(cars.splice(1, 1, new car(2, "XUV700", "Mahindra", 2700000)))
    console.log("These are the cars")
    cars.forEach(car => {
        console.log(car)
    })
}

function shift() {
    console.log(cars.shift())
    console.log("These are the cars")
    cars.forEach(car => {
        console.log(car)
    })
}

function unshift() {
    console.log(cars.unshift(new car(4, "XUV700", "Mahindra", 2700000), new car(5, "Altroz", "Tata", 750000)))
    console.log("These are the cars")
    cars.forEach(car => {
        console.log(car)
    })
}