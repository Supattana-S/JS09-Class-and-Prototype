function f() {
  alert("Hello!");
}

Function.prototype.defer = function (time) {
  setTimeout(() => {
    this();
  }, time);
};

f.defer(1000);
