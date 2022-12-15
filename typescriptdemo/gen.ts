function gen1<T>(arg: T) {
  console.log(arg);
}

gen1<string>("Hi There");

function gen2<A>(arg1: A, arg2: A): A {
  return arg1 + arg2;
}
console.log(gen2<number>(100, 200));

class Gen3<k, v> {
  private m: Map<k, v>;
  constructor() {
    this.m = new Map<k, v>();
  }
  add(key: k, val: v) {
    this.m.set(key, val);
  }
  display() {
    console.log(this.m);
  }
}

let obj1 = new Gen3<number, number>();
obj1.add(5, 6);
obj1.display();

let obj2 = new Gen3<string, number>();
obj2.add("Vaibhav Sharma ", 22);
obj2.display();

let obj3 = new Gen3<string, boolean>();
obj3.add("Vaibhav Sharma ", true);
obj3.display();
