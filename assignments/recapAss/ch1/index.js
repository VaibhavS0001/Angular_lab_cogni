class Employee {
    constructor(id, name, salary) {
        this.id = id
        this.name = name
        this.salary = salary
    }
    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    getSalary() {
        return this.salary
    }

    setId(id) {
        return this.id = id
    }
    setName(name) {
        return this.name = name
    }
    setSalary(salary) {
        return this.salary = salary
    }
}

let employees = []
let id = 0
const addEmployee = (e) => {
    id += 1
    e.preventDefault()
    let name = document.getElementById("name").value
    let salary = parseInt(document.getElementById("salary").value)
    let emp = new Employee(id, name, salary)
    employees.push(emp)
}

const sortEmployeesBySalary = (e) => {
    e.preventDefault()
    let sortBySalary = employees.sort(
        (a, b) => (a.salary > b.salary) ? 1 : (a.salary < b.salary) ? -1 : 0);

    console.log(sortBySalary);
}

const sortEmployeesByName = (e) => {
    e.preventDefault()

    let sortBySalary = employees.sort(
        (a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);

    console.log(sortBySalary);
}