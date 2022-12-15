interface Colorable {
  color: string;
}

const c: Colorable = {
  color: "red",
};
console.log(c.color);
const c1: Colorable = {
  color: "pink",
};
console.log(c1.color);

interface Printable {
  print: () => void;
}

interface DigitalPrint extends Colorable, Printable {}

let obj: DigitalPrint = {
  color: "yellow",
  print() {
    console.log(this.color);
  },
};

obj.print();
