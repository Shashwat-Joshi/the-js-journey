// General way to create objects in JS

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("Drawing...");
  },
};

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log(this.radius);
    },
  };
}

const circle1 = createCircle(2);
const circle2 = createCircle(10);

circle1.draw();
circle2.draw();
