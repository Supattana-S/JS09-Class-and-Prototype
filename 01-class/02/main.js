class sale {
  constructor(name, amount, price, discount) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.discount = discount;
  }
  calcprice() {
    return this.price * (1 - this.discount / 100);
  }
}

class beverage extends sale {}

const obj = new beverage("Pepsi", 3, 19, 10);
console.log(obj);
console.log(obj.calcprice());
