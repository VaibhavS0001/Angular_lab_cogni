class Student {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }
}
let students = new Map();
let s1 = new Student(1, "Vaibhav Sharma", "Delhi");
let s2 = new Student(2, "Vaibhav", "UP");
let s3 = new Student(3, "XYZ", "Chandigarh");
let s4 = new Student(4, "ABC", "Goa");
students.set(s1, [40, 30]);
students.set(s2, [50, 20]);
students.set(s3, [25, 40]);
students.set(s4, [45, 29]);
const addStudents = (s) => {
    let add = 0;

    for (let [key, value] of students) {
        if (key.id === s.id) {
            value.push(50);
            add += 1;
            break;
        }
    }
    if (add == 0) {
        students.set(s, [21]);
    }
    console.log(students);
};

const getTotalMarks = (id) => {
    for (let [key, value] of students) {
        if (key.id === id) {
            console.log(`total marks ${value.reduce((a, b) => a + b)}`)
        }
    }
}
console.log(`EXISTING students`)
addStudents(new Student(4, "ABC", "Goa"));
console.log(`NEW students`)
addStudents(new Student(5, "DEF", "Pune"));
getTotalMarks(4)