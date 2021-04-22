function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log(radius);
  };
}

Circle.call({}, 2);
Circle.apply({}, [1, 2, 3, 4]);

const circle = new Circle(6);
