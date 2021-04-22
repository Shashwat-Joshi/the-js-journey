function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape() {}

Shape.prototype.duplicate = function () {
  console.log("Duplicating.....");
};

function Circle() {}

extend(Circle, Shape);

const c = new Circle();
