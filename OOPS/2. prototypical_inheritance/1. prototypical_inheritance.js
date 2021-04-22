function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicating.....");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

// Resetting the constructor

//  but after changing the prototype of circle we can no longer access
//  the Circle.prototype.constructor so if we want to use it we'll have
//  to reset the Circle.prototype.constructor.
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
  console.log("Drawing....");
};

const circle = new Circle(5);

circle.draw();
circle.duplicate();

console.log(circle);
