class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log("drawing..");
  }

  static parse(json) {
    const radius = JSON.parse(json).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parse('{"radius" : 1}');
circle.draw();
console.log(circle);
