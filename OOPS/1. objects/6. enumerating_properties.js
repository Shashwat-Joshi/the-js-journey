function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(radius);
  };
}

const circle = new Circle(5);

for (let key in circle) {
  if (typeof circle[key] !== "function") console.log(circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);
