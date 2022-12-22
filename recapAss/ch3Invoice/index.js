class Invoice {
  constructor(title, details, total, date) {
    this.title = title;
    this.details = details;
    this.total = total;
    this.date = date;
  }

  get title() {
    return this.title;
  }

  get details() {
    return this.details;
  }

  get total() {
    return this.total;
  }

  get date() {
    return this.date;
  }

  set title(val) {
    this._title = val;
  }

  set details(val) {
    this._details = val;
  }

  set total(val) {
    this._total = val;
  }

  set date(val) {
    this._date = val;
  }

}

class Printer {
  print(invoice) {
    console.log(invoice);
  }
}

let invoices = [
  new Invoice("January", "Salary", "50000", "12-02-2022"),
  new Invoice("February", "Salary", "60000", "12-03-2022"),
  new Invoice("March", "Salary", "70000", "12-04-2022"),
];

let p = new Printer();
invoices.forEach((i) => {
    p.print(i)
});
