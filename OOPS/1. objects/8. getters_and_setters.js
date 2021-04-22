function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 1 };

  this.draw = function () {
    console.log("drawing...");
  };
  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid Location");
      defaultLocation = value;
    },
  });
}

const circle = new Circle(5);

console.log(circle.defaultLocation);
circle.defaultLocation = 1;
console.log(circle.defaultLocation);
