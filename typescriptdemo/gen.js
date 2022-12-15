function gen1(arg) {
    console.log(arg);
}
gen1(100);
function gen2(arg1, arg2) {
    return arg1 + arg2;
}
console.log(gen2(100, 200));
class Gen3 {
    constructor() {
        this.m = new Map();
    }
    add(key, val) {
        this.m.set(key, val);
    }
    display() {
        console.log(this.m);
    }
}
let obj1 = new Gen3();
obj1.add(5, 6);
obj1.display();
let obj2 = new Gen3();
obj2.add("Vaibhav Sharma ", 22);
obj2.display();
let obj3 = new Gen3();
obj3.add("Vaibhav Sharma ", true);
obj3.display();
