// "use strict";

// const Circle = function () {
//   this.draw = function () {
//     console.log(this);
//   };
// };

// const c = new Circle();
// c.draw();

// const draw = c.draw;
// draw();

// By default executed in strict mode
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw();
