class A {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getDetails() {
        return null;
    }
}

class B {
    constructor(a) {
        this.a = a;
    }
    getDetails() {
        return this.a.getDetails();
    }
}

module.exports = { A, B };