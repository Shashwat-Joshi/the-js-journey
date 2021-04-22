// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//   }
// }

// we cannot make variable private with a _[underscore] in JS

// Method 1: Using symbols
// Method 2: Using WeakMaps

const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log("move...");
    });
  }

  draw() {
    _move.get(this)();
    console.log("Radius is ", _radius.get(this));
  }
}

const c = new Circle(5);
c.draw();
