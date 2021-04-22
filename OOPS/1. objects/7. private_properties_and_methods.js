function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 1 };
  let computeOptimumLocation = function (factor) {
    // ...
    console.log(defaultLocation);
  };
  this.draw = function () {
    let x, y;
    computeOptimumLocation(0.1);
    console.log("drawing...");
  };
}

const circle = new Circle(5);
circle.draw();
