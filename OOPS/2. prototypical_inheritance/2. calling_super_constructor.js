function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function () {
  console.log("Duplicating.....");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function () {
  console.log("Drawing....");
};

const circle = new Circle(5, "red");

circle.draw();
circle.duplicate();

console.log(circle);
