const c = {
    color: "red"
};
console.log(c.color);
const c1 = {
    color: "pink"
};
console.log(c1.color);
let obj = {
    color: "yellow",
    print() { console.log(this.color); }
};
obj.print();
