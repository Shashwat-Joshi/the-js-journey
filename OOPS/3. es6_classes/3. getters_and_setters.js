const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(val) {
    if (val < 0) throw new Error("Cannot assign negative value");
    _radius.set(this, val);
  }
}

const c = new Circle(10);

console.log(c.radius);
c.radius = 5;
console.log(c.radius);
