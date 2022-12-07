class employee {
    constructor(name, salary, department, empid) {
        this.name = name
        this.salary = salary
        this.department = department
        this.empid = empid
    }
    get name() {
        return this.name
    }
    get salary() {
        return this.salary
    }
    get dapartment() {
        return this.department
    }
    get empid() {
        return this.empid
    }

    set name(val) {
        this.name = val
    }
    set salary(val1) {
        this.salary = val1
    }
    set department(val2) {
        this.department = val2
    }
    set empid(val3) {
        this.empid = val3
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