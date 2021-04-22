// Factory function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log(this.radius);
    },
  };
}

// Constructor function
function CreateCircle(radius) {
  console.log(this);
  this.radius = radius;
  this.draw = function () {
    console.log(radius);
  };
}

const anotherCircle = new CreateCircle(3);
anotherCircle.draw();

// Constructor properties

const x = {};
// JS engine -> const x = new Object()
