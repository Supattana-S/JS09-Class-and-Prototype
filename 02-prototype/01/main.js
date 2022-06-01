const arr = [3, 4, 6, 13, 11, 6, 1, 8];

Array.prototype.max = function () {
  this.sort((a, b) => a - b);
  return this[this.length - 1];
};

Array.prototype.sum = function () {
  let sum = 0;
  for (i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
};

console.log(arr.max());
console.log(arr.sum());
