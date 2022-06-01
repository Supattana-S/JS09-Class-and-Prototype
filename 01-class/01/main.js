class Calculator {
  constructor(num) {
    this.value = num || 0;
  }

  sum(inputnum) {
    inputnum = +prompt("Enter num");
    return (this.value += inputnum);
  }

  subtract(inputnum) {
    inputnum = prompt("Enter num");
    return (this.value -= inputnum);
  }

  multiply(inputnum) {
    inputnum = prompt("Enter num");
    return (this.value *= inputnum);
  }

  devide(inputnum) {
    inputnum = prompt("Enter num");
    return (this.value /= inputnum);
  }

  show() {
    console.log(this.value);
  }
}

const a = new Calculator(10);
a.sum();
a.subtract();
a.multiply();
a.devide();

a.show();
