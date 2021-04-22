function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(radius);
  };
}

// Adding properties
const circle = new Circle(5);
circle.area = 10;
circle["parameter"] = 100;

console.log(circle);

// Deleting properties
delete circle.area;
delete circle["parameter"];

console.log(circle);
