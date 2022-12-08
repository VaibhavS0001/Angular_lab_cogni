class employee {
    constructor(name, salary, department, empid) {
        this.name = name
        this.salary = salary
        this.department = department
        this.empid = empid
    }
    get name() {
        return this._name
    }
    get salary() {
        return this._salary
    }
    get dapartment() {
        return this._department
    }
    get empid() {
        return this._empid
    }

    set name(val) {
        this._name = val
    }
    set salary(val) {
        this._salary = val
    }
    set department(val) {
        this._department = val
    }
    set empid(val) {
        this._empid = val
    }

    disp(){
        console.log(`${this.id} ${this.price}`);
    }
}

let div = document.createElement('div')
div.id = "div1"
let p = document.createElement('p')
p.id = "p1"
let button = document.createElement('button')
button.id = "btn"
button.textContent = "Set Employee"
button.addEventListener("click", e => {
    let emp = new employee("Vaibhav", 7812364, "R&D", 2158536);
    console.log(emp)
})
let button1 = document.createElement('button')
button1.id = "btn1"
button1.textContent = "Get Employee"
div.appendChild(button)
div.appendChild(button1)
document.body.appendChild(div)